import classes from './Input.module.css';

const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* ...props.input makes sure all key value pairs in input object that we receive on props.input are added as props to input */}
            <input {...props.input}/>
        </div>
    );
};

export default Input;