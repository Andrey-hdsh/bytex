import './guide.css';
import Icon from 'components/Icon/Icon';
import processCircle from 'image/process-circle.png';
import line from 'image/Line 138.png';
import underline from 'image/blue-line-guide.png';
import blumb from 'image/bulb-guide.png';
import tlellipsse from 'image/top-left-elipse-guide.png';
import tlNet from 'image/left-net.png';
import redSquire from 'image/red-squire.png';
import rtNet from 'image/right-top-net-guide.png';
import trEllipse from 'image/top-right-ellipse-guide.png';
import greenTriangle from 'image/green-triangle.png';
import centerEllipse from 'image/bottom-left-ellipse-guide.png';
import blTriangle from 'image/bottom-left-triangle-giude.png';
import circle from 'image/circle-business.png';
import violetTtiangle from 'image/blue-violet-triangle-guide.png';
import blueThomb from 'image/thombus-process.png';
import centerTriangle from 'image/center-triangle-guide.png';
import brTriangle from 'image/bottom-right-triangle-guide.png';
import brEllipse from 'image/bottom-right-ellipse-guide.png';



const Guide = () => {
  return (
    <section className="guid-section">
      <img src={tlellipsse} alt="ellipsse" className='tl-ellipse-guid' loading='lazy'/>
      <img src={tlNet} alt="net" className='left-net-guid'loading='lazy'/>
      <img src={redSquire} alt="red squire" className='red-squire-guid' loading='lazy'/>
      <img src={rtNet} alt="net" className='right-net-guid' loading='lazy'/>
      <img src={trEllipse} alt="ellipse" className='tr-ellipse-guid' loading='lazy'/>
      <img src={greenTriangle} alt="green triangle" className='triangle-giud' loading='lazy'/>
      <img src={centerEllipse} alt="ellipse" className='tb-ellipse-guide' loading='lazy'/>
      <img src={blTriangle} alt="triangle" className='bl-triangle-guide' loading='lazy'/>
      <img src={circle} alt="circle" className='center-circle-guid' loading='lazy'/>
      <img src={violetTtiangle} alt="triangle" className='violet-tiangle-guide' loading='lazy'/>
      <img src={centerTriangle} alt="triangle" className='cr-triangle-guide' loading='lazy'/>
      <img src={brTriangle} alt="triangle" className='br-triangle-guide' loading='lazy'/>
      <img src={brEllipse} alt="ellipse" className='br-ellipse-guide' loading='lazy'/>
      <div className="guid-container">
        <h3>
          8 Step Guide to our
          <br /> 8 Figure Strategy
        </h3>
        <div className="list-blok">
          <ul className="guid-list">
            <li>
              <div>
                <img src={processCircle} alt="circle" loading='lazy'/>
                <Icon width={36} height={36} iconId="icon-awareness" />
              </div>
              <p>Aware</p>
              <div className="giude-elipse"></div>
            </li>
            <li>
              <div>
                <img src={processCircle} alt="circle" loading='lazy'/>
                <Icon width={36} height={36} iconId="icon-engage" />
              </div>
              <p>Engage</p>
              <div className="giude-elipse"></div>
            </li>
            <li>
              <div>
                <img src={processCircle} alt="circle" loading='lazy'/>
                <Icon width={36} height={36} iconId="icon-subscribe" />
              </div>
              <p>Subscribe</p>
              <div className="giude-elipse"></div>
            </li>
            <li>
              <div>
                <img src={processCircle} alt="circle" loading='lazy'/>
                <Icon width={36} height={36} iconId="icon-convert" />
              </div>
              <p>Convert</p>
              <div className="giude-elipse"></div>
            </li>
            <li>
              <div>
                <img src={processCircle} alt="circle" loading='lazy'/>
                <Icon width={36} height={36} iconId="icon-excicle" />
              </div>
              <p>Excite</p>
              <div className="giude-elipse"></div>
            </li>
            <li>
              <div>
                <img src={processCircle} alt="circle" loading='lazy'/>
                <Icon width={36} height={36} iconId="icon-ascent" />
              </div>
              <p>Ascend</p>
              <div className="giude-elipse"></div>
            </li>
            <li>
              <div>
                <img src={processCircle} alt="circle" loading='lazy'/>
                <Icon width={36} height={36} iconId="icon-advocate" />
              </div>
              <p>Advocate</p>
              <div className="giude-elipse"></div>
            </li>
            <li>
              <div>
                <img src={processCircle} alt="circle" loading='lazy'/>
                <Icon width={36} height={36} iconId="icon-promote" />
              </div>
              <p>Promote</p>
              <div className="giude-elipse"></div>
            </li>
          </ul>
          <img src={line} alt="line" className="guide-line" loading='lazy'/>
        </div>
        <div className="line-block-guide">
          <h4>What we’ll do for you</h4>
          <img src={underline} alt="underline" loading='lazy'/>
          <img src={blueThomb} alt="thomb" className='blue-thomb-guige' loading='lazy'/>
        </div>
        <p className="guide-text">
          thousandsof products and offer continuous addition
          <br /> and monthly campaign optimization.
        </p>

        <div className="category-block">
          <ul>
            <li>
              <img src={blumb} alt="blumb" loading='lazy'/>
              <h5>Sales Funnel</h5>
              <p>
                Before we start with the genuine
                <br /> improvement of an item, a decent item
                <br /> procedure should initially be written down.
              </p>
            </li>
            <li>
              <Icon width={60} height={60} iconId="icon-search"  className='category-icon'/>
              <h5>SEO</h5>
              <p>
                To delineate your vision and objectives as plainly as could
                really be expected, we start the coordinated.
              </p>
            </li>
            <li>
              <Icon width={60} height={60} iconId="icon-envelope" className='category-icon'/>
              <h5>Email Marketing</h5>
              <p>
                When there is a reasonable image of the
                <br /> end result, we can get everything rolling
                <br /> with the UX, the specialized.
              </p>
            </li>
            <li>
              <Icon width={60} height={60} iconId="icon-rupot" className='category-icon'/>
              <h5>Advertisement</h5>
              <p>
                Once in a while suppositions made in the idea stage are
                hazardous to the point that it very well may be valuable.
              </p>
            </li>
            <li>
              <Icon width={60} height={60} iconId="icon-sociamedia" className='category-icon'/>
              <h5>Social Media</h5>
              <p>
                A MVP , or Least Suitable Item, is the most straightforward
                variant of your item with which you can really offer.
              </p>
            </li>
            <li>
              <Icon width={60} height={60} iconId="icon-content" className='category-icon'/>
              <h5>Content Creation</h5>
              <p>
                There’s no one way to run a data function. But today’s winning
                companies are able to equip their internal.
              </p>
            </li>
          </ul>
          <button className="guide-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Guide;
