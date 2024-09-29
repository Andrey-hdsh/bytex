import PartnersLogos from 'components/Partners/Partners';
import './hero.css';
import Transform from 'components/TransformSection/Transform';
import OurProcess from 'components/OurProcess/OurProcess';
import Business from 'components/Business/Business';

const HomePage = () => {
    return (
<div>
<div className='hero-section'>
</div>
    <Transform/>
    <PartnersLogos/>
    <OurProcess/>
    <Business/>
</div>
    )
};

export default HomePage;