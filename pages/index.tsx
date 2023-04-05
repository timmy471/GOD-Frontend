import React from 'react';
import { NextPage } from 'next';
import { ICar } from '@src/types/cars';
import { getCars } from './api/carsRequests';

interface IProps {
  cars: ICar[];
  filterOptions: [];
}

const LandingPage: NextPage<IProps> = ({ cars, filterOptions }) => {
  if (!cars.length) return <h1>Spinner</h1>;
  return (
    <div>
      <h1>CARS</h1>
      {/* {console.log(cars)} */}
      {/* {JSON.stringify(cars, null, 2)} */}
    </div>
  );
};

export async function getServerSideProps() {
  const cars = await getCars();
  return {
    props: {
      cars,
      filterOptions: cars.map((car: ICar) => car.bodyType),
    },
  };
}

export default LandingPage;
