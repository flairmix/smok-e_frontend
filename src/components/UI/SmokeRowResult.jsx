import React, { useState } from 'react';
import SmokeInput from './input/SmokeInput';


const SmokeRowResult =  (props) => {

    return (
        <div> 
            <SmokeInput value={props.number}
                style={{width: '10%'}}
                disabled='true'
            />
            <SmokeInput value= {props.nameParameter}
                style={{width:'50%'}}
                disabled
                />
            <SmokeInput value={props.parameter}
                style={{width: '30%'}}
                disabled
            />
            <SmokeInput value= {props.units}
                style={{width: '10%'}}
                disabled
            />
        </div>
    );
};

export default SmokeRowResult;