import React from 'react';
import classes from './SmokeInput.module.css'

const SmokeInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.SmokeInput} {...props}/>
    );
});

export default SmokeInput; 