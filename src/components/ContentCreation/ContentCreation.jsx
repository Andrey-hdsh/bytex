import './contentCreation.css'
import contantImg from 'image/content-creation-img.png';

const ContentCreation = () => {
  return (
    <section className="content-section">
      <div className='content-block'>
        <div className="content-wrapper">
          <h4>Content Creation</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button type='button'>Learn More</button>
        </div>
        <img src={contantImg} alt="img" loading='lazy'/>
      </div>
    </section>
  );
};

export default ContentCreation;
