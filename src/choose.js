import React from 'react';
import { useState, useEffect } from 'react';

const Choose = (props) => {
    useEffect(() => {

      });

    return(
        
        <>
        {props.weapon ==""  && 
        <div className='choose'>
            <h3 className='text-center text-white'>Choose your weapon  {props.weapon}</h3>
            <div className="row">
                <div className="col ms-3">
                    <input type="text" className="form-control" placeholder="Player 1 name" aria-label="Player 1 name" />
                    <button className='weapon text-center text-warning btn' onClick={props.handleClick} value="X">X</button>
                </div>
                <div className="col me-3">
                    <input type="text" className="form-control" placeholder="Player 2 name" aria-label="Player 2 name" />
                    <button className='weapon text-center text-info btn' onClick={props.handleClick} value="O">O</button>
                </div>
            </div>
        </div>
        }
        </>
    );
}


export default Choose;