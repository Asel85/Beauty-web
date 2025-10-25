import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from '../../assets/img/slide-1.jpg';
import SecondSlide from '../../assets/img/slide-2.png';
import ThirdSlide from '../../assets/img/slide-3.jpg';
import style from './SlideSection.module.scss';
const SlideSection = () => {
  return (
    <Carousel className="pb-5" data-bs-theme="dark" interval={2000}>
      <Carousel.Item>
        <img src={FirstSlide} alt="slide-1" className={`d-block mx-auto img-fluid ${style.img}`} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={SecondSlide} alt="slide-2" className={`d-block mx-auto img-fluid ${style.img}`} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={ThirdSlide} alt="slide-3" className={`d-block mx-auto img-fluid ${style.img}`} />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideSection;
