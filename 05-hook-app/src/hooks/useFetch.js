import { useEffect, useRef, useState } from 'react';

export default function useFetch(url) {
    if(!url){throw new Error('No hay url')}
    const [state, setstate] = useState({data: null, loading: true, error: null})

    const isMounted = useRef(true);

    useEffect(() => {
        //useEffect creado solo para activarse onInit y enviar la petición de cierre si el componente que lo usa está desmontado y no da error
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setstate({data: null, loading: true, error: null});// Con esta línea pongo el estafo por defecto cada vez que hay una nueva petición

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

               if(isMounted.current) {
                setstate({
                    data,
                    loading: false,
                    error: null,
                });
               }else {
                   console.log('setState no fue llamado');
               }
                
            });
    }, [url])

    return state;
}
