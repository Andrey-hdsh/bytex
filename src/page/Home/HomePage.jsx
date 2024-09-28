import './hero.css';
import underline from 'image/yelow-underlin.png';
import videoPlayer from 'image/bkg-player.png';
import playerIcon from 'image/player-icon.png';
import topLeftBlur from 'image/left-top-blur.png';
import topRightBlur from 'image/right-top-blur.png';
import triangle from 'image/triangle.png';

const HomePage = () => {
    return (
<div>
<div className='hero-section'>
</div>
      <section className='section-transform'>
      <div className='section-transform-blok'><h2>Transform our business into<br/>
      a <span>well-oiled</span> sales machine in 90 days Or Less</h2>
      <img src={underline} alt="underlined" className='section-transform-img'/>
      </div>
      <p>Quick video reveals how to multiple your ROI with only one<br/> of our simple strategies</p>
      <div className='player-blok'>
        <img src={videoPlayer} alt="video player" />
        <img src={playerIcon} alt="plyer icon" className='player-icon'/>
        </div>
    <img src={topLeftBlur} alt="brul" className='top-left-blur'/>
    <img src={topRightBlur} alt="brul" className='top-right-blur'/>
    <img src={triangle} alt="triangle" className='triangle'/>
    </section>
</div>
    )
};

export default HomePage;