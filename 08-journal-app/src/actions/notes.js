import { addDoc, collection, deleteDoc, doc, updateDoc } from "@firebase/firestore";
import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;
        console.log(uid);

        const newNote = {
            title: 'a',
            body: '',
            date: new Date().getTime()
        }
        
        
        const doc = await addDoc(collection(db, `${uid}`, 'journal/notes'), newNote)

        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})


export const startLoadingNotes = (uid) => {
    return async(dispatch) => {
        //carga notas desde firebase
        const notes = await loadNotes(uid);
        // meter notas en el estado
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = ( note ) => {
    
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if(!note.url) {
            delete note.url
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        try {
            const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
            await updateDoc(noteRef, noteToFirestore);
    
            dispatch(refreshNote(note.id, noteToFirestore));
            Swal.fire('Saved', note.title, 'success');
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error, 'error');
        }
    }
}

//para actuaizar en navbar cada vez que se edite una nota no he de llamar al startLoadingNotes, es ineficiente y no es necesario cargar con llamada a Api cuando cambian a lo sumo 2 campos de 1 nota
export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id, 
        note: {
            id,
            ...note
        }
    }
})

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const {active:activeNote} = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;

        dispatch(startSaveNote( activeNote ))

        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;
        
        const noteRef = doc(db, `${uid}/journal/notes/${id}`)
        await deleteDoc(noteRef);

        dispatch(deleteNote(id));
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
}); 

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})