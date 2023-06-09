import 'swiper/css';
import { Block } from 'vcc-ui';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { ICar } from '@src/types/cars';
import CarouselCard from './CarouselCard';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  items: ICar[];
}

const MAXITEMSTODISPLAY = 4;

const Carousel: React.FC<IProps> = ({ items }) => {
  const [disableNext, setDisableNext] = useState<boolean>(false);
  const [disablePrevious, setDisablePrevious] = useState<boolean>(true);
  const [carousel, setCarousel] = useState<any>({});

  const handleSlideChange = (activeIndex: number) => {
    if (activeIndex === 0) {
      setDisablePrevious(true);
      setDisableNext(false);
    } else if (activeIndex === items?.length - MAXITEMSTODISPLAY) {
      setDisableNext(true);
      setDisablePrevious(false);
    } else {
      setDisablePrevious(false);
      setDisableNext(false);
    }
  };

  const carouselBreakPoints = {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.6,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: MAXITEMSTODISPLAY,
      spaceBetween: 22,
    },
  };

  return (
    <Block className='carousel-wrapper'>
      <Swiper
        pagination={{ clickable: true }}
        onInit={(ev) => {
          setCarousel(ev);
        }}
        onSlideChange={({ activeIndex }) => handleSlideChange(activeIndex)}
        modules={[Pagination, Navigation]}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
          pageUpDown: true,
        }}
        breakpoints={carouselBreakPoints}>
        {items.map((car: ICar) => (
          <SwiperSlide key={car.id}>
            <CarouselCard {...car} />
          </SwiperSlide>
        ))}
      </Swiper>
      {items?.length > MAXITEMSTODISPLAY && (
        <Block className='carousel-controls d-flex'>
          <Image
            src={'/images/chevron-circled.svg'}
            width={40}
            height={40}
            tabIndex={0}
            alt='previous'
            onClick={() => carousel.slidePrev()}
            className={`previous-icon ${disablePrevious ? 'control-disabled' : ''}`}
            role='button'
          />
          <Image
            src={'/images/chevron-circled.svg'}
            width={40}
            height={40}
            tabIndex={0}
            alt='next'
            onClick={() => carousel.slideNext()}
            className={`next-icon ${disableNext ? 'control-disabled' : ''}`}
            role='button'
          />
        </Block>
      )}
    </Block>
  );
};

export default Carousel;
