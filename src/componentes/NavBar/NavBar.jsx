import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to='/'>
        <img
          className=''
          src={'/public/img/logoMoto.png'}
          alt='Logo Moto'
        />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to='/categoria/Accesorios'>Accesorios</NavLink>
          </li>
          <li>
            <NavLink to='/categoria/Repuestos'>Repuestos</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;