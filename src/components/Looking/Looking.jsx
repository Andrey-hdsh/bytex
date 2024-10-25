import Icon from 'components/Icon/Icon';
import './looking.css';
import advertisement from 'image/advertisement.png';
import seo from 'image/seo.png';
import socialMedia from 'image/social-media.png';
import contentCreation from 'image/content-creat.png';
import sallesFunnel from 'image/sales-funnel.png';
import emailMarketing from 'image/email-marketing.png';
import frame from 'image/frame.png';

const Looking = () => {
  return (
    <section className="looking-section">
      <div className="looking-container ">
        <h2>What You’re Looking For?</h2>
        <ul className="head-list">
          <li>
            <div>
              <Icon
                width={118}
                height={118}
                iconId="circle-block"
                className="icons"
              />
              <Icon
                width={36}
                height={36}
                iconId="ellipse-circle-block"
                className="icons"
              />
              <Icon
                width={39}
                height={39}
                iconId="diagramma-block"
                className="icons"
              />
            </div>
            <h3>
              I want to drive <br /> More Traffic
            </h3>
            <p>
              Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt
              ius ex.
            </p>
          </li>
          <li>
            <div>
              <Icon width={118} height={118} iconId="circle-block" />
              <Icon width={36} height={36} iconId="ellipse-circle-block" />
              <Icon width={54} height={54} iconId="people-block" />
            </div>
            <h3>
              I want to increase
              <br /> Engagement
            </h3>
            <p>
              Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt
              ius ex.
            </p>
          </li>
          <li>
            <div>
              <Icon width={118} height={118} iconId="circle-block" />
              <Icon width={36} height={36} iconId="ellipse-circle-block" />
              <Icon width={56} height={56} iconId="money_block" />
            </div>
            <h3>
              I want to boost
              <br /> Conversion
            </h3>
            <p>
              Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt
              ius ex.
            </p>
          </li>
        </ul>
        <ul className="category-list">
          <li>
            <div className='category-head-block'>
              <div className="category-underline"></div>
              <h4>Advertisement</h4>
              <p>
                Do you have an amazing product/service but nobody knows it
                exists? Customers the life blood of any business and without
                them, you simply won’t survive. So, how can you get the right
                message across to the right audience and THEN convert them into
                high-paying, repeat customers? Well, that’s the biggest
                challenge for any business.
              </p>
              <button type="button">Get Started</button>
            </div>
            <div className='category-image-block'>
              <img src={advertisement} alt="advertisement" loading='lazy'/>
              <img src={frame} alt="frame" loading='lazy'/>
            </div>
          </li>
          <li>
            <div className='category-image-block'>
              <img src={seo} alt="advertisement" loading='lazy'/>
              <img src={frame} alt="frame" loading='lazy'/>
            </div>
            <div className='category-head-block'>
              <div className="category-underline"></div>
              <h4>SEO</h4>
              <p>
                Search Engines are not what they used to be, thats for sure.
                They’re constantly evolving and what was working yesterday,
                might not necessarily work today. Search marketing is one of the
                main and most important pillars of marketing. It can help to
                boost your website’s traffic on a large scale, when optimised
                correctly – all whilst supporting your other digital marketing
                disciplines too.
              </p>
              <button type="button">Get Started</button>
            </div>
          </li>
          <li>
            <div className='category-head-block'>
              <div className="category-underline"></div>
              <h4>Social Media</h4>
              <p>
                If a major digital marketing goal is to get your message and
                products in front of your desired audience, then optimising your
                use social media is a no brainer. The majority of businesses out
                there fail to comprehend the true concept of social media and
                how to fully leverage each of these very different mediums, in
                their marketing plans.
              </p>
              <button type="button">Get Started</button>
            </div>
            <div className='category-image-block'>
              <img src={socialMedia} alt="advertisement" loading='lazy'/>
              <img src={frame} alt="frame" loading='lazy'/>
            </div>
          </li>
          <li>
            <div className='category-image-block'>
              <img src={contentCreation} alt="advertisement" loading='lazy'/>
              <img src={frame} alt="frame" loading='lazy'/>
            </div>
            <div className='category-head-block'>
              <div className="category-underline"></div>
              <h4>Content Creation</h4>
              <p>
                Search Engines are not what they used to be, thats for sure.
                They’re constantly evolving and what was working yesterday,
                might not necessarily work today. Search marketing is one of the
                main and most important pillars of marketing.
              </p>
              <button type="button">Get Started</button>
            </div>
          </li>
          <li>
            <div className='category-head-block'>
              <div className="category-underline"></div>
              <h4>Sales Funnel</h4>
              <p>
                Did you know that 78% of businesses are not satisfied with their
                conversion rate? “The business that is able and willing to spend
                the most to acquire a customer wins” – it’s extremely important
                to design and engineer specific-purpose conversion funnels,
                which would ultimately reduce customer acquisition costs whilst
                also increasing the ACV (Average customer Value) you get from
                your sales.
              </p>
              <button type="button">Get Started</button>
            </div>
            <div className='category-image-block'>
              <img src={sallesFunnel} alt="advertisement" loading='lazy'/>
              <img src={frame} alt="frame" loading='lazy'/>
            </div>
          </li>
          <li>
            <div className='category-image-block'>
              <img src={emailMarketing} alt="advertisement" loading='lazy'/>
              <img src={frame} alt="frame" loading='lazy'/>
            </div>
            <div className='category-head-block'>
              <div className="category-underline"></div>
              <h4>Email Marketing</h4>
              <p>
                Regardless of any rumours that you may have heard, email
                marketing is nowhere near “dead” – in fact it is very far from
                that. In just 2019 alone, over 293.6 BILLION emails were sent
                PER DAY. 72% of customers prefer email as their main channel for
                business communication. Email marketing is an absolutely
                paramount channel and it is one that actually converts the best.
              </p>
              <button type="button">Get Started</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Looking;
