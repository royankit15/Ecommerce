import classes from './ProductItem.module.css';
import ProductAdd from './ProductAdd';

const ProductItem =(props) => {

    return (
        <div>
        <li className={classes.product}>
            <div>
                <h4>{props.title}</h4>
                <img src={props.image} alt =''></img>
                <div className={classes.price}>{props.price}</div>
                <ProductAdd item ={props}/>
            </div>
        </li>
        </div>
    );
};

export default ProductItem;