import { getElementError } from "@testing-library/react";
import React,{useState} from "react";
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

const [categories, setCategories] = useState(["One punch", "Samurai X", "Dragon ball"])

// const handleAdd = () =>{
//     // setCategories([...categories,'Monster Hunter'])
//     setCategories( cats => [...categories,'Monster Hunter']);
// }

  return (   
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory/>
      <hr></hr>
       <ol>
        {
        categories.map(category => {
          return <li key={category}>{category}</li>
        })
        }
      </ol>
    </div>
  );
};

export default GifExpertApp;
