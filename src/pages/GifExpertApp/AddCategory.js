import {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => { 

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({target}) => setInputValue(target.value);
  const handleSubmit = e => {
    e.preventDefault();

    if(inputValue.trim().length > 2) {
      setCategories(cat => [...cat, inputValue]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type        = "text"
        className   = "form-control"
        value       = {inputValue}
        pattern     = "^.{3,}$"
        required    = {true}
        title       = "Debe tener mínimo 3 letras"
        placeholder = 'Buscar un GIF'
        onChange  ={handleInputChange}/>
    </form>
  );

};

AddCategory.propTypes = {
  setCategories : PropTypes.func.isRequired
}

export default AddCategory;