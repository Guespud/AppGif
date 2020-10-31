import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {    
    setInputValue( e.target.value);
  } 

  const handleSubmit = () =>{
      
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default AddCategory;
