import React, {useState} from 'react';
import Header from './Layout/Header';
import Availableitem from './Items/AvailableItem';
import Header2 from './Layout/Header2';
import Footer from './Layout/Footer';
import Cart from './Cart/Cart';
import CartProvider from './Store/Cart-provider';


const App = () => {
 
   const [cartIsShown,setCartIsShown] = useState(false);

   const showCartHandler = () => {
       setCartIsShown(true);
   };

    const hideCartHandler =() => {
      setCartIsShown(false);
    };
  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>} 
  <Header onShowCart ={showCartHandler}/>
  <Header2/>
  <Availableitem/>
  <Footer/>
  </CartProvider>
  );
}

export default App;
