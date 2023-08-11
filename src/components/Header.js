import logo from '../assets/Logo.svg'
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <img src={logo} alt='Logo'/>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/booking'>Reservations</Link></li>
            <li><Link to='/order'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </header>
);
export default Header;