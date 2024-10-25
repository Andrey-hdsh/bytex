import './partners.css';
import patekPhillippe from 'image/Patek-Philippe.png';
import mersedes from 'image/mersedes.png';
import ferrari from 'image/ferrari.png';
import gumBall from 'image/gumBall.png';
import bugatti from 'image/Bugatti.png';
import burna from 'image/burna.png';
import rolex from 'image/Rolex.png';
import { useEffect, useRef, useState } from 'react';

const PartnersLogos = () => {
  const scrollContainer = useRef(null);
  const [scrollInterval, setScrollInterval] = useState(null);

  const startAutoScroll = () => {
    if (scrollContainer.current) {
      const intervalId = setInterval(() => {
        scrollContainer.current.scrollLeft += 2;
      }, 20);
      setScrollInterval(intervalId);
    }
  };

  const stopAutoScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  useEffect(() => {
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [scrollInterval]);

  return (
    <div
      className="scroll-container"
      onMouseEnter={startAutoScroll}
      onMouseLeave={stopAutoScroll}
      ref={scrollContainer}
    >
      <img src={patekPhillippe} alt="Patek Phillippe" loading='lazy'/>
      <img src={mersedes} alt="Mersedes" loading='lazy'/>
      <img src={ferrari} alt="Ferrari" loading='lazy'/>
      <img src={gumBall} alt="GumBall" loading='lazy'/>
      <img src={bugatti} alt="Bugatti" loading='lazy'/>
      <img src={burna} alt="Burna" loading='lazy'/>
      <img src={rolex} alt="Rolex" loading='lazy'/>
    </div>
  );
};

export default PartnersLogos;
