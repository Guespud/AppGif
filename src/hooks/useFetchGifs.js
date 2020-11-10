import { useEffect,useState } from "react";
import { getGifs } from "../helpers/GetGifs";

const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then(img =>{
        
        setTimeout(() => {
            setstate({
                data:img,
                loading: false
            });
        },1000)
        
      
    });
  }, [category]);

  return state;
};

export default useFetchGifs;
