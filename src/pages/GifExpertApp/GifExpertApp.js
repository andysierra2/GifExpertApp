import {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  return(
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>

      <div className="d-flex flex-column-reverse justify-content-start">
        {
          categories.map((cat, idx) => {
            return <GifGrid key={cat+'_'+idx} cat={cat}/>
          })
        }
      </div>
    </div>
  );

};

export default GifExpertApp;