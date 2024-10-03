import { Field, Form, Formik } from 'formik';
import './subscribe.css';

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="newsletter-blok">
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
        <Formik>
                  <Form className="form-help">
                                            <h3 className='form-help-head'>Subscribe Newsletter</h3>
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
            <Field as="textarea" name="wishes" className="form-field-textarea" />
            <button type="submit" className="help-btn">
              Subscribe
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Subscribe;
