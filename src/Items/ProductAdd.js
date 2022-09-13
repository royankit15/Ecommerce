import { useContext } from 'react';
import classes from './ProductAdd.module.css';
import CartContext from '../Store/Cart-Context';

const ProductAdd =(props) => {

  const cartCntx = useContext(CartContext)
    
  const addItemToCart =(event) => {
    event.preventDefault();
    cartCntx.addItem({...props.item})
    console.log
  }
   return <div className={classes.form}>
     <button onClick={addItemToCart}>Add to Cart</button>
   </div>
};

export default ProductAdd;