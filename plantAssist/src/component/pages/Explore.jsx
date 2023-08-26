import React from 'react';
import '../Plant.css';
import Plant from '../Plant';

//This is the Explore page 

function Explore() {
  return (
    <div className='plant'>
      <h1>Explore all Types</h1>
      <div className='plant__container'>
        <div className='plant__wrapper'>
          <ul className='plant__items'>
            <Plant
            //   FETCH FROM DB    
            />
            <Plant
            //   FETCH FROM DB    
            />
          </ul>
          <ul className='plant__items'>
          <Plant
            //   FETCH FROM DB    
            />
           <Plant
            //   FETCH FROM DB    
            />
           <Plant
            //   FETCH FROM DB    
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Explore;