import React from 'react';
import { ICar } from '@src/types/cars';
import { getCar } from 'pages/api/carsRequests';
import { GetServerSideProps, NextPage } from 'next';

interface IProps {
  car: ICar;
}

const Car: NextPage<IProps> = ({ car }) => {
  return <div>Car</div>;
};

export const getServerSideProps: GetServerSideProps<{}> = async ({ query }) => {
  const carId = query.id;
  const car = await getCar(carId);
  return {
    props: {
      car,
    },
  };
};

export default Car;
