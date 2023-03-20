import React from 'react';
import { useState, useEffect } from 'react';

const Tablero = (props) => {
    useEffect(() => {

      });
      
    return(
        <>
            <div className='tablero'>
                <div className='row'>
                    <div className='col borde'>
                        <button id='a1' className='weapon text-center text-warning btn' onClick={props.handleClick} value=""></button>
                        <div className="line" />
                        <button id='a2' className='weapon text-center text-warning btn' onClick={props.handleClick} value=""></button>
                        <div className="line" />
                        <button id='a3' className='weapon text-center text-warning btn' onClick={props.handleClick} value=""></button>
                    </div>
                    <div className='col borde'>
                        <button id='b1' className='weapon text-center text-warning btn' onClick={props.handleClick} value=""></button>
                        <div className="line" />
                        <button id='b2' className='weapon text-center text-warning btn' onClick={props.handleClick} value=""></button>
                        <div className="line" />
                        <button id='b3' className='weapon text-center text-warning btn' onClick={props.handleClick} value=""></button>
                    </div>
                    <div className='col'>
                        <button id='c1' className='weapon text-center text-warning btn' onClick={props.handleClick} value=""></button>
                        <div className="line" />
                        <button id='c2' className='weapon text-center text-warning btn' onClick={props.handleClick} value=""></button>
                        <div className="line" />
                        <button id='c3' className='weapon text-center text-warning btn' onClick={props.handleClick} value=""></button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Tablero;