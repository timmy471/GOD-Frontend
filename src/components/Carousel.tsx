import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useState } from 'react';
import { Block, Flex } from 'vcc-ui';
import { ICar } from '@src/types/cars';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  items: ICar[];
}

const Carousel: React.FC<IProps> = ({ items }) => {
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrevious, setDisablePrevious] = useState(true);

  const MAXITEMSTODISPLAY = 4;

  const handleSlideChange = (activeIndex: number) => {
    if (activeIndex === 0) {
      setDisablePrevious(true);
      setDisableNext(false);
    } else if (activeIndex === 10 - MAXITEMSTODISPLAY) {
      setDisableNext(true);
      setDisablePrevious(false);
    } else {
      setDisablePrevious(false);
      setDisableNext(false);
    }
  };

  return (
    <Block className='carousel-wrapper'>
      <Swiper
        pagination={{ clickable: true }}
        onSlideChange={({ activeIndex }) => handleSlideChange(activeIndex)}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
          pageUpDown: true,
        }}
        navigation={{
          nextEl: '.next-icon',
          prevEl: '.previous-icon',
        }}
        breakpoints={{
          480: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: MAXITEMSTODISPLAY,
            spaceBetween: 22,
          },
        }}
        modules={[Pagination, Navigation]}>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ border: '1px solid red' }}>Slide 10</SwiperSlide>
      </Swiper>
      {items?.length > MAXITEMSTODISPLAY && (
        <Flex className='carousel-controls'>
          <Image
            src={'/images/chevron-circled.svg'}
            width={40}
            height={40}
            tabIndex={0}
            alt='previous'
            className={`previous-icon ${disablePrevious ? 'control-disabled' : ''}`}
            role='button'
          />
          <Image
            src={'/images/chevron-circled.svg'}
            width={40}
            height={40}
            tabIndex={0}
            alt='next'
            className={`next-icon ${disableNext ? 'control-disabled' : ''}`}
            role='button'
          />
        </Flex>
      )}
    </Block>
  );
};

export default Carousel;
