import { useState, useEffect } from 'react'
import { getGifGrid } from '../helpers/getGifs';
const useFecthGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    useEffect(() => {
        getGifGrid(category)
            .then(imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    })
            })
    }, [category])
    return state;
}

export default useFecthGifs
