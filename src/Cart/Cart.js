import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart =(props) =>{

    const cartItems = [
        { 
        title: 'Colors',
        price: 100, 
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        }
        ].map(item => <li>{item.title} {item.price} {item.quantity}</li>);
   
    return <Modal onClick={props.onClose}>
        <div className={classes.text}>
            Cart
        </div>
        <div className={classes.total}>
            <span>ITEM</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
        </div>
        <div className={classes['cart-items']}>
            {cartItems}
        </div>
        <div className={classes.actions}>
            <button>PURCHASE</button>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        </div>
        </Modal>
};  

export default Cart;