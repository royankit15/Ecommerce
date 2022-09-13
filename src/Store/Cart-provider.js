import React, {useState} from 'react';
import CartContext from "./Cart-Context";

let items =[];
const CartProvider =(props) => {
    
    const [items, updateitems] = useState([])
   
    const addItemToCartHandler =(item) => {
        updateitems([...items,item])
    };

    const removeItemFromCartHandler =(id) => {};

    const cartContext ={
        items : items,
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    };

    return <CartContext.Provider value ={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;