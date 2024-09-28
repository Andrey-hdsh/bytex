import { NavLink, Outlet } from 'react-router-dom';
import logo from 'image/logo.png';
import './layout.css'

const Layout = () => {
  return (
    <div className="container">
      <header className="header">
      <a href="mailto:info@bytexmarketing.com" className='link-mail'>info@bytexmarketing.com</a>
        <nav className='nav'>
          <NavLink to="/">
            <img src={logo} alt="logo img" />
          </NavLink>
          <ul className='nav-list'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/presentation">How It Works</NavLink></li>
            <li><a href="mailto:info@bytexmarketing.com">Pricing</a></li>
            <li><NavLink to="blog">Blog</NavLink></li>
            <li><NavLink to="/question">Features</NavLink></li>
          </ul>
          <button type='button' className='header-btn'>Get Started</button>
        </nav>
      </header>
      <Outlet/>
      <footer></footer>
    </div>
  );
};

export default Layout;