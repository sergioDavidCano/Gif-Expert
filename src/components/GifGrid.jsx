import React from 'react'
import useFecthGifs from '../hooks/useFecthGifs'
import GifGridItem from './GifGridItem';
const GifGrid = ({ category }) => {
    //El use effect se utiliza mas que todo para peticiones de
    //ya que permite una unica peticion que se hace para asi 
    //evitar consumir recursos
    const { data:images, loading } = useFecthGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animate animate__flash">Loading</p>}
            <div className="card-grid">
                {images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
                }
            </div>
        </>
    )
}

export default GifGrid
