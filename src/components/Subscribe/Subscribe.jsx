import { Field, Form, Formik } from 'formik';
import './subscribe.css';

import tlCircleForm from 'image/subscribe-form-tl-circle.png';
import brCircleForm from 'image/subscribe-form-br-circle.png';
import tlCircleNewsletter from 'image/newsletter-tl-circle.png';
import Icon from 'components/Icon/Icon';

import AAP from 'image/AAP.png';
import sixty8Adventure from 'image/SIXTY 8 ADVENTURE.png';
import honda from 'image/Honda.png';
import kudosMusic from 'image/kudosMusic.png';
import runSun from 'image/run.png';
import rollsRoyce from 'image/rolls-royce.png';
import meekMill from 'image/meekmill.png';
import DreamChasers from 'image/Dream_Chasers.png';
import atlantik from 'image/atlantik.png';
import genesis from 'image/Genesis.png';
import volvo from 'image/Volvo.png';
import sevenFriday from 'image/seven-friday.png';
import tlCircle from 'image/subscribe-tl-circle.png';


const Subscribe = () => {
  return (
    <section className="subscribe-section">
      
      <div className="newsletter-blok">
        <img src={tlCircleForm} alt="circle" className="newsletter-tl-circle" />
        <img src={brCircleForm} alt="circle" className="newsletter-br-circle" />
        <Icon
          width={29}
          height={29}
          iconId="icon-form-squire"
          className="newsletter-icon-squire"
        />
        <Icon
          width={29}
          height={29}
          iconId="icon-form-triangle"
          className="newsletter-icon-triangle"
        />

        <h4>Subscribe to our newsletter</h4>
        <p>
          ign up to our newsletter to get our blogs which include strategies,
          tips and tactics
          <br /> to generate millions
        </p>
        <Formik>
          <Form className="form">
            <Field
              type="text"
              name="name"
              className="form-field"
              placeholder="First name"
            />
            <Field
              type="email"
              name="email"
              className="form-field"
              placeholder="Email address"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe Now
            </button>
          </Form>
        </Formik>
      </div>
      <h3 className="newsletter-head">Let us know how we can help</h3>
      <div className="help-block">
        <img src={tlCircleNewsletter} alt="circle" />
        <Icon width={45} height={45} iconId="newsletter-triangle" />
        <Icon width={70} height={70} iconId="newsletter-br-circle" />
        <Formik>
          <Form className="form-help">
            <h3 className="form-help-head">Subscribe Newsletter</h3>
            <Field
              type="text"
              name="name"
              className="form-field-help"
              placeholder="First name"
            />
            <Field
              type="text"
              name="name"
              className="form-field-help"
              placeholder="Last name"
            />
            <Field
              as="textarea"
              name="wishes"
              className="form-field-textarea"
            />
            <button type="submit" className="help-btn">
              Subscribe
            </button>
          </Form>
        </Formik>
      </div>
      <h3 className="our-latest">Our Latest Blogs</h3>
      <ul className="our-latest-list">
        <li>
          <Icon width={108.11} height={102.77} iconId="icon-lamp" />
          <h4>Benefits of SEO</h4>
          <span>23 Feb, 2023</span>
          <p>
            Nunc sit amet enim vitae ligula v tibulum ultrices dignissim nec
            ipsum. Ut interdum, nibh at hendrerit semper, diam nulla dict
            turpis, sit amet aliquet
          </p>
          <button type="button">Read More</button>
        </li>
        <li>
          <Icon width={84} height={84} iconId="icon-book" />
          <h4>Benefits of SEO</h4>
          <span>23 Feb, 2023</span>
          <p>
            Nunc sit amet enim vitae ligula v tibulum ultrices dignissim nec
            ipsum. Ut interdum, nibh at hendrerit semper, diam nulla dict
            turpis, sit amet aliquet
          </p>
          <button type="button">Read More</button>
        </li>
        <li>
          <Icon width={103} height={103} iconId="icon-fling" />
          <h4>Benefits of SEO</h4>
          <span>23 Feb, 2023</span>
          <p>
            Nunc sit amet enim vitae ligula v tibulum ultrices dignissim nec
            ipsum. Ut interdum, nibh at hendrerit semper, diam nulla dict
            turpis, sit amet aliquet
          </p>
          <button type="button">Read More</button>
        </li>
      </ul>
      <button type="button" className="our-latest-btn">
        See More
      </button>

      <div className="first-client-block">
        <img src={AAP} alt="AAP logo" width={233} height={147}/>
        <img src={sixty8Adventure} width={157} height={87} alt="sixty 8 Adventure logo" />
        <img src={honda} width={163} height={92} alt="Honda logo" />
        <img src={kudosMusic} width={191} height={92} alt="Kudos Music logo" />
        <img src={runSun} width={139} height={101} alt="Run Sun logo" />
        <img src={rollsRoyce} width={57} height={105} alt="Rolls Royce logo" />
      </div>
      <div className='secont-client-block'>
        <img src={meekMill} width={179} height={82} alt="Meek Mill logo" />
        <img src={DreamChasers} width={58} height={105} alt="Dream Chasers logo" />
        <img src={atlantik} width={111} height={101} alt="Atlantik logo" />
        <img src={genesis} width={219} height={138} alt="Genesis logo" />
        <img src={volvo} width={140} height={88} alt="Volvo logo" />
        <img src={sevenFriday} width={321} height={95} alt="Seven Friday logo" />
      </div>
      <img src={tlCircle} alt="circle" className='subscribe-circle-bkg'/>
    </section>
  );
};

export default Subscribe;

