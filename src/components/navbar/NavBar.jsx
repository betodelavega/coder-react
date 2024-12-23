import React from 'react'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {
  
  
  
  return (
    <header>
      <H1>E-COMMERS</H1>

    <nav>
           <div className="logo">MyStore</div>
          <ul>
           <li><a href="#home">Home</a></li>
           <li><a href="#shop">Shop</a></li>
           <li><a href="#contact">Contact</a></li>
          </ul>
      <CartWidget />
      </nav>


    </header>
    
  )
}

export default NavBar
