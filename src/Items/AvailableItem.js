import React from 'react';
import classes from './AvailableItem.module.css';
import ProductItem from './ProductItem';

const productsArr = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Availableitem= () => {
    const itemlist = productsArr.map((item) => 
    <ProductItem
    key={item.id}
    title ={item.title}
    image= {item.imageUrl}
    price={item.price}
    />
    );

    return <section className={classes.products}>
            {itemlist}
    </section>
};
export default Availableitem;
