import classes from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* ...props.input makes sure all key value pairs in input object that we receive on props.input are added as props to input */}
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;