import Link from 'next/link';
import { Block, Text } from 'vcc-ui';
import { ICar } from '@src/types/cars';
import { getCar } from 'pages/api/carsRequests';
import { GetServerSideProps, NextPage } from 'next';
interface IProps {
  car: ICar;
}

const Learn: NextPage<IProps> = ({ car }) => {
  return (
    <Block className='container'>
      <Block className='car-detail'>
        <Text>LEARN ABOUT {car.id}</Text>
        <Link href='/'>Go Back</Link>
      </Block>
    </Block>
  );
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

export default Learn;
