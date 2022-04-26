import React from 'react';
import PropTypes from 'prop-types';
import './GifGridItem.css';

export const GifGridItem = ({id, title, url, onload})=> {
  return (
    <div className="card p-0 col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
      <div className="card-body p-0 d-flex flex-col justify-content-center overflow-hidden">
        <img 
          src={url} 
          alt={id+title}
          onLoad={onload}
          height="200px"/>
      </div>
      <div className="card-footer">
        <p>{title}</p>
      </div>
    </div>
  );
}

export const GifGridItemLoading = ({placeholders=1})=> {
  return (
    <div className='skeleton-container'>
      {
        Array.from(Array(placeholders).keys()).map(
          (i, idx) => (
            <div className="card" key={Date.now().toString()+idx}>
              <div className='card-body'>
                <div className="skeleton" style={{height: '100px'}}></div>
              </div>
              <div className='card-footer'>
                <div className="skeleton" style={{height: '30px'}}></div>
              </div>
            </div>
          )
        )
      }
    </div>
  );
}
GifGridItemLoading.propTypes = {
  placeholders : PropTypes.number
}