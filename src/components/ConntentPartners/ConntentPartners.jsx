import './conntentPartners.css';
import gragon from 'image/dragon.png';
import atelier from 'image/atelier.png';
import anigia from 'image/aniga.png';
import giggs from 'image/giggs.png';
import superCar from 'image/supercar.png';
import premiumRally from 'image/premium-rally.png';
// import { useEffect, useRef, useState } from 'react';

const ConntentPartners = () => {


  return (
    <div
      className="scroll-partners-container"
    //   onMouseEnter={startAutoScroll}
    //   onMouseLeave={stopAutoScroll}
    //   ref={scrollContainer}
    >
      <img src={gragon} alt="gragon" loading='lazy'/>
      <img src={atelier} alt="Atelier" loading='lazy'/>
      <img src={anigia} alt="Anigia" loading='lazy'/>
      <img src={giggs} alt="GIGGS" loading='lazy'/>
      <img src={superCar} alt="Super Car" loading='lazy'/>
      <img src={premiumRally} alt="Premium Rally" loading='lazy'/>
    </div>
  );
};

export default ConntentPartners;
