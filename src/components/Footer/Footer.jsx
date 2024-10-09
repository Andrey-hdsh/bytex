import { Field, Form, Formik } from 'formik';
import './footer.css';
import { NavLink } from 'react-router-dom';
import logo from 'image/logo.png';
import Icon from 'components/Icon/Icon';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-head-block">
          <h4>
            Signup our newsletter to get update information, news, insights or
            promotions.
          </h4>
          <Formik>
            <Form className="footer-head-form">
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
              ></Field>
              <button type="button">Sign Up</button>
            </Form>
          </Formik>
        </div>
        <div className="footer-wrapper">
          <div className="footer-social-block">
            <NavLink to="/">
              <img src={logo} alt="logo img" />
            </NavLink>
            <h3>
              Find out how we can help you scale your business and take it to
              new heights.
            </h3>
            <p>Simply fill this form and get into contact with us today!</p>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/accounts/login/?next=%2Fomdop%2Ffeed%2F&source=profile_feed_tab&locale=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon width={28} height={28} iconId="icon-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/account_advanced"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon width={28} height={28} iconId="icon-youtube" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon width={27} height={27} iconId="icon-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/?app=desktop&hl=uk&gl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon width={23} height={23} iconId="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="quick-links-block">
            <div>
              <p>Quick Links</p>
              <ul>
                <li>Services</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Latest Posts</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p>Quick Links</p>
              <ul>
                <li>Services</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Latest Posts</li>
                <li>Contact</li>
                <li>Page 5</li>
              </ul>
            </div>
          </div>
          <div className="footer-form-block">
            <Formik>
              <Form>
                <div>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                  <Field type="text" name="firstName" placeholder="Last Name" />
                </div>
                <Field type="email" name="email" placeholder="Email" />
                <Field
                  type="phone"
                  name="phoneNumber"
                  placeholder="Phone Number"
                />
                <Field type="url" name="website" placeholder="Website" />
                <Field
                  type="text"
                  name="serviceNeeded"
                  placeholder="What kind of service do you need?"
                />
                <Field as="textarea" name="wishes" placeholder="Message" className='footer-wishes' />
                <button type='submit' className='footer-btn'>Send Message</button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className='footer-underline'></div>
      <small>Copyright © 2023 Bytex Marketing, All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
