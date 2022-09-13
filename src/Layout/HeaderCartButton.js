import React from 'react';
import {useContext} from 'react';
import CartContext from '../Store/Cart-Context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton =(props) => {
    const cartCtx = useContext(CartContext);
    let quantity =0;
    cartCtx.items.forEach(item =>{
        quantity=quantity+Number(item.quantity);
    })

 return (
     <button className={classes.button} onClick={props.onClick}>
        <span> Cart</span>
        <span className={classes.badge}>{quantity}</span>
     </button>
 );
};

export default HeaderCartButton;

