import Link from 'next/link';
import { ICar } from '@src/types/cars';
import { getCar } from 'pages/api/carsRequests';
import { Block, Text, Button, View } from 'vcc-ui';
import { GetServerSideProps, NextPage } from 'next';

interface IProps {
  car: ICar;
}

const Shop: NextPage<IProps> = ({ car }) => {
  return (
    <Block className='container'>
      <Block className='d-flex cars-wrapper'>
        <Text>SHOP FOR {car.id}</Text>
        <View maxWidth='280' marginLeft={3}>
          <Link href='/'>
            <Button>Go Back</Button>
          </Link>
        </View>
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

export default Shop;
