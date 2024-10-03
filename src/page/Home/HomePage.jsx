import PartnersLogos from 'components/Partners/Partners';
import './hero.css';
import Transform from 'components/TransformSection/Transform';
import OurProcess from 'components/OurProcess/OurProcess';
import Business from 'components/Business/Business';
import Guide from 'components/Guide/Guide';
import ContentCreation from 'components/ContentCreation/ContentCreation';
import ChooseUs from 'components/ChooseUs/ChooseUs';
import ConntentPartners from 'components/ConntentPartners/ConntentPartners';
import Pricing from 'components/Pricing/Pricing';
import Subscribe from 'components/Subscribe/Subscribe';

const HomePage = () => {
  return (
    <div>
      <div className="hero-section"></div>
      <Transform />
      <PartnersLogos />
      <OurProcess />
      <Business />
      <Guide />
      <ContentCreation />
      <ChooseUs />
      <ConntentPartners />
      <Pricing />
      <Subscribe/>
    </div>
  );
};

export default HomePage;
