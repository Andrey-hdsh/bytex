import { NavLink, Outlet } from 'react-router-dom';
import logo from 'image/logo.png';
import './layout.css';
import Footer from 'components/Footer/Footer';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

const Layout = () => {
  return (
    <div className="container">
      <ScrollToTop/>
              <a href="mailto:info@bytexmarketing.com" className="link-mail">
          info@bytexmarketing.com
        </a>
      <header className="header">
        <nav className="nav">
          <NavLink to="/">
            <img src={logo} alt="logo img" />
          </NavLink>
          <ul className="nav-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/presentation">FAQ</NavLink>
            </li>
            <li>
              <a href="#pricing-section">Pricing</a>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="*">Features</NavLink>
            </li>
          </ul>
          <button type="button" className="header-btn">
            Get Started
          </button>
        </nav>
      </header>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
