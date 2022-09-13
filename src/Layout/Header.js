import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header>
    <div className={classes.container}> 
    <nav className={classes.navbar}>
    <a className={classes.text} href='/'>Home</a>
    <a className={classes.text}href='/'>Store</a>
    <a className={classes.text}href='/'>About</a>
    <HeaderCartButton onClick={props.onShowCart}/>
    </nav>
    </div>
    <div>
    </div>
    </header>
  )
}


export default Header;