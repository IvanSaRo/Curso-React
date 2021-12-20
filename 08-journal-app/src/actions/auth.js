
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { noteLogout } from './notes';
import { finishLoading, startLoading } from './ui';





/* export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
} */
//LO de abajo es una versión "simplificada" de lo de arriba
export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
})

export const logout = () => ({
    type: types.logout,
})



 
export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) =>{
        dispatch(startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    dispatch(login(user.uid, user.displayName));
                    dispatch(finishLoading());

                })
                .catch((e) => {
                    console.log(e);
                    Swal.fire('Error', e.message, 'error');
                    dispatch(finishLoading());
                })
    }
}


export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then( async({ user }) => {
 
                await updateProfile( user, { displayName: name });
 
            dispatch(login(user.uid, user.displayName));
        })
        .catch( e => {
            console.log(e);
        })
    }
}
 
export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
    }
}
 
export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth);

        dispatch(logout());
        dispatch(noteLogout());
    }
}
