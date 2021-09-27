import React from 'react';
import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {
    const [categories, setCategories] = useState(['The simpsons']);
    return (
        <div>
            <h2>GitExpertApp</h2>
            {/* Podemos pasar propiedades entre componentes */}
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />       
                    ))
                }
            </ol>
        </div>
    )
}

export default GitExpertApp
