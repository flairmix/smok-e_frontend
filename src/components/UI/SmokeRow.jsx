import React, { useState } from 'react';
import SmokeInput from './input/SmokeInput';


const SmokeRow =  (props) => {

    const nameParameter = props.nameParameter
    const [parameter, setParameter] = useState({nameParameter: props.parameter})


	const addNewParam = (e) => {
        e.preventDefault()
        
        const newParam = {...parameter, nameParameter: e.target.value}
        setParameter(newParam);
        
        if (e.target.value) {
            props.setProps(nameParameter, newParam.nameParameter);
        } 
	} 

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
            <SmokeInput value={parameter.nameParameter}
                onChange={e => addNewParam(e)}

                // onChange={e => props.setParameterList({...props.parameterList, props.parameter: e.target.value})}
                style={{width: '30%'}}
            />
            <SmokeInput value= {props.units}
                style={{width: '10%'}}
                disabled
            />
        </div>
    );
};

export default SmokeRow;


