import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  const itemCount = 0;

  return (
    <header>
      <h1>E-COMMERS</h1>

      <nav>
        <div className='logo'>MyStore</div>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#shop'>Shop</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <CartWidget itemCount={itemCount} />
    </header>
  );
};

export default NavBar;
