import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    //Para saber que la persona que esta escribiendo 
    //o tiene actuamente en su input debemos 
    //utilizar un use state para eso 
    const [inputValue, setInputValue] = useState('');
    //Para tomar la propiedad que tiene el formulario debemos 
    //utilizar la propiedad e.target.value  para cambiar el 
    //el estado
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    //Para prevenir el refresh del navegador,
    // hacer un e.preventDefault 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue,...cats ]);
            setInputValue('');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}
//Obligar que la propiedad deba ser pasada para poder funcionar
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory
