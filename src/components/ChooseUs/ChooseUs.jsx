import Icon from 'components/Icon/Icon';
import './chooseUs.css';
import headImg from 'image/head.png';

const ChooseUs = () => {
  return (
    <section className="choose-section">
      <div className="connecting-block">
        <span>WHY CHOOSE US</span>
        <h4>
          Connecting people is
          <br />
          our business.
        </h4>
        <p className="connecting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button type="batton">Get Started</button>
      </div>
      <div className="recognition-block">
        <ul>
          <li>
            <img src={headImg} alt="head img" />
            <h5>Smarter Solutions</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ectetur
              adipiscing elit.
            </p>
          </li>
          <li>
            <Icon width={60} height={60} iconId='icon-graduate-cut'/>
            <h5>Certified Experts</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ectetur
              adipiscing elit.
            </p>
          </li>
          <li>
            <Icon width={60} height={60} iconId='icon-graph-bar'/>
            <h5>Higher Conversions</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ectetur
              adipiscing elit.
            </p>
          </li>
          <li>
            <Icon width={52} height={52} iconId='icon-system-uicons_support'/>
            <h5>Higher Conversions</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ectetur
              adipiscing elit.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChooseUs;
