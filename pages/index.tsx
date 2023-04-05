import { Spinner, View, Block, Flex } from 'vcc-ui';
import { NextPage } from 'next';
import { ICar } from '@src/types/cars';
import { getCars } from './api/carsRequests';
import { Virtual, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Carousel from '@src/components/Carousel';

interface IProps {
  cars: ICar[];
  bodyTypes: [];
}

const LandingPage: NextPage<IProps> = ({ cars, bodyTypes }) => {
  if (!cars.length) return <Spinner />;

  const otherProps = {
    pagination: { clickable: true },
  };

  return (
    <Block className='container'>
      <Block className='cars-wrapper'>
        <Carousel items={cars} />
      </Block>
    </Block>
  );
};

export async function getServerSideProps() {
  const cars = await getCars();
  return {
    props: {
      cars,
      bodyTypes: cars.map((car: ICar) => car.bodyType),
    },
  };
}

export default LandingPage;
