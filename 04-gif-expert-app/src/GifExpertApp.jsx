import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {
    
    const [categories, setCategories] = useState(['One Punch'])
    
    /* const handleAdd = () => {
        setCategories(() => [...categories, 'Naruto']);
    } */
    
    return (
      <div>
        <h2>GifExpertApp</h2>
        <hr />
        <AddCategory setCategories={setCategories} />
        <ol>
            {
            categories.map(category => {
                return <GifGrid category={category} key={category} />
            } )
            }
        </ol>
      </div>
    )
  }