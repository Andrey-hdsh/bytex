import './busines.css';
import circle from 'image/circle-business.png';
import triangle from 'image/triangle-business (1).png';
import square from 'image/square.png';

const Business = () => {
  return (
    <section className="business-section">
              <img src={circle} alt="circle" />
      <img src={triangle} alt="triangle" />
      <img src={square} alt="square" />
      <h3>
        Take your business to
        <br /> the next level
      </h3>
      <div>
        <p>
          You’ll be receiving a fully customized breakdown of how you can change
          your business and implement some of the secrets that we have used to
          generate hundreds of thousands of dollars in profit, both for
          ourselves and for our clients.
        </p>
        <p>
          Firstly we’ll evaluate your business and use our advanced tools to
          asses your website & where you’ve been going wrong all this time, as
          well as also develop a strategic blueprint to dramatically skyrocket
          your sales, both consistently and efficiently.
        </p>
        <p>
          We’ll help you reveal where your dream clients have been hiding all
          along and how you can easily persuade them to become loyal customers
          and subscribers. We will delve right into the depths of your industry,
          even by using our tools to find out the exact keywords and
          demographics that your competition has been targeting, to see what
          works best for you and your business.
        </p>
        <p>
          By combining all of this with our Santa’s bag of endless goodies,
          we’ll be able to exponentially increase your traffic, your leads and
          most importantly, your sales. Take the leap of faith and become the
          LEADER of your industry!
        </p>
      </div>
    </section>
  );
};

export default Business;
