import Icon from 'components/Icon/Icon';
import './pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-wrapper">
        <div>
          <h4>Plans & Pricing</h4>
          <p>
            Whether your time-saving automation needs are large or small,
            <br /> we’re here to help you scale.
          </p>
        </div>
        <div className="pricing-btn-block">
          <button type="button">MONTHLY</button>
          YEARLY
        </div>
      </div>
      <div className="rate-block">
        <ul className="rate-list">
          <li className="rate-item">
            <p className="rate-head-text">
              <span>$19</span> /month
            </p>
            <h5>Starter</h5>
            <p className="rate-center-text">
              Unleash the power of
              <br /> automation.
            </p>
            <ul className="benefit-list">
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>Multi-step Zaps</p>
                </div>
              </li>
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>3 Premium Apps</p>
                </div>
              </li>
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>2 Users team</p>
                </div>
              </li>
            </ul>
            <button type="button" className="rate-btn">
              Choose plan
            </button>
          </li>
          <li className="rate-item">
            <p className="rate-head-text">
              <span>$54</span> /month
            </p>
            <h5>Professional</h5>
            <p className="rate-center-text">
              Advanced tools to take your
              <br /> work to the next level.
            </p>
            <ul className="benefit-list">
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>Multi-step Zaps</p>
                </div>
              </li>
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>Unlimited Premium Apps</p>
                </div>
              </li>
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>50 Users team</p>
                </div>
              </li>
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>Shared Workspace</p>
                </div>
              </li>
            </ul>
            <button type="button" className="rate-btn">
              Choose plan
            </button>
          </li>
          <li className="popular-item">
            <div className='most-popular-block'>MOST POPULAR</div>
            <p className="rate-head-text">
              <span>$89</span> /month
            </p>
            <h5>Company</h5>
            <p className="rate-center-text">
              Automation plus enterprise-
              <br />
              grade features.
            </p>
            <ul className="benefit-list">
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>Multi-step Zap</p>
                </div>
              </li>
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>Unlimited Premium</p>
                </div>
              </li>
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>Unlimited Users Team</p>
                </div>
              </li>
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>Advanced Admin</p>
                </div>
              </li>
              <li>
                <div>
                  <Icon width={20} height={20} iconId="icon-check-mark" />
                  <p>Custom Data Retention</p>
                </div>
              </li>
            </ul>
            <button type="button" className="rate-popular-btn">
              Choose plan
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
