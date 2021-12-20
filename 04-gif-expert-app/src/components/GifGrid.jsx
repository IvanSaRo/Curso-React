import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {
    
    /* const [images, setImages] = useState([]);
    
    
    useEffect(() => {
        getGifs(category)
            .then( imgs => setImages( imgs));
    }, [category]); */
    
    const {data:images, loading} = useFetchGifs(category);
    

    
    return (
        <>
            <h3>{category}</h3>
        {loading && <p>loading...</p>}
            {/* <div >
                <ol className="card-grid">
                {
                    images.map((img) => 
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />)
                }  
                </ol>
            </div> */}
            <div >
                <ol className="card-grid">
                {
                    images.map((img) => 
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />)
                }  
                </ol>
            </div>
        </>
    )
}
