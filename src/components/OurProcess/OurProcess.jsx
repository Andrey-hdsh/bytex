import './ourProcess.css';
import circle from 'image/process-circle.png';
import avarege from 'image/awareness.png';
import conversion from 'image/conversion.png';
import evaluation from 'image/evaluation.png';
import blur from 'image/process-blur.png';
import dubleCircle from 'image/circle.png';
import thombus from 'image/thombus-process.png';

const OurProcess = () => {
  return (
    <section className="process-section">
      <h3>Our Process</h3>
      <ul>
        <li>
          <div>
            <img src={circle} alt="circle" />
            <img src={avarege} alt="avarege" />
          </div>
          <h4>Awareness</h4>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> ea mundi malorum cfsaum,
            <br /> reprehendunt ius ex.
          </p>
        </li>
        <li>
          <div>
            <img src={circle} alt="circle" />
            <img src={evaluation} alt="evaluation" />
          </div>
          <h4>Evaluation</h4>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> ea mundi malorum cfsaum,
            <br /> reprehendunt ius ex.
          </p>
        </li>
        <li>
          <div>
            <img src={circle} alt="circle" />
            <img src={conversion} alt="conversion" />
          </div>
          <h4>Conversion</h4>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> ea mundi malorum cfsaum,
            <br /> reprehendunt ius ex.
          </p>
        </li>
      </ul>
      <button type="button">Learn More</button>
      <img src={blur} alt="blur" className="blur" />
      <img src={dubleCircle} alt="circle" className="circle-process" />
      <img src={thombus} alt="thombus" className="thombus-process" />
    </section>
  );
};

export default OurProcess;