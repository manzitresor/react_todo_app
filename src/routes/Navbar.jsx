import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => (
  <>
    <ul className="navbar">
      {
        links.map((link) => (
          <li key={link.text} className="nav-list">
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))
      }
    </ul>
  </>
);
export default Navbar;
