import {useState} from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import constants from './GifExpertApp.constants';
import { GifGridItem, GifGridItemLoading } from './GifGridItem';
import { InlineSpinner } from '../../components/InlineSpinner';
import './GifGrid.css';

const GifGrid = ({cat = ''}) => {

  const [state, setState] = useState({
    imgLoads: 0
  })

  const {gifs, loading, count, totalCount} = useFetchGifs(cat, constants.limit);

  const handleLoad = () => 
    setState(prevState => ({...prevState, imgLoads: prevState.imgLoads+1}));


  return (
    <div className="card my-3 shadow-sm fade-in-down">
      <div className="card-header">
        <div className='d-flex flex-row justify-content-between card-header-content'>
          <div className='d-flex flex-row flex-nowrap'>
            <h3>{cat}</h3>
            { 
              state.imgLoads < count && (
                <>
                  <InlineSpinner className='text-primary align-self-center mx-3'/>
                  <small className='align-self-center py-0 my-0'>Transfiriendo desde Giphy...</small>
                </>
              )
            }
          </div>
          <h5> { loading? 'Esperando ' : count > 0? totalCount : 'No se encontraron ' } resultados </h5>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          {
            loading? <GifGridItemLoading placeholders={constants.limit}/> :
            gifs?.map(img => <GifGridItem key={img.id} onload={handleLoad} {...img}/>)
          }
        </div>
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  cat: PropTypes.string
};

export default GifGrid;