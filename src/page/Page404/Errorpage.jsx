import { Link } from 'react-router-dom';
import './errorPage.css'

const ErrorPage = () => {
    return (
        <section className="error-section">
            <h1>Oops</h1>
            <p>Something Went Wrong</p>
        <Link to='/'><button className='error-btn' type='button'>GO TO HOME</button></Link>
        </section>
    )
};

export default ErrorPage;