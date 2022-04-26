import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/Giphy';

export const useFetchGifs = (category, limit=10) => {

  const [state, setState] = useState({
    data:     [],
    loading:  true,
    meta:     {}
  });

  useEffect(()=>{

    setTimeout(() => {
      
      getGifs(category, limit)
      .then(
        response => setState({...response, loading: false})
      );
      
    }, 3000);


  }, [category, limit]);
  
  return state;
}