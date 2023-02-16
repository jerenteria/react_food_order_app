import classes from './MealItem.module.css';


const MealItem = (props) => {
    // proper way to render price; toFixed(2) will always display to decimal places ex $12.99
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                
            </div>
        </li>
    );
};


export default MealItem;