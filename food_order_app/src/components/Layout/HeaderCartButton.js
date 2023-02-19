import CartIcon from '../Cart/Carticon';
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';



const HeaderCartButton = (props) => {
    const [btnisHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;
    // reduce allows us to transform an arr of data into a single value
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);



    const btnClasses = `${classes.button} ${btnisHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0) {
            return; 
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};


export default HeaderCartButton;