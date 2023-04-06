import { Spinner, Block, Text } from 'vcc-ui';
import { NextPage } from 'next';
import { ICar } from '@src/types/cars';
import 'swiper/css';
import 'swiper/css/pagination';
import { getCars } from './api/carsRequests';
import Carousel from '@src/components/Carousel';
import { useState, useMemo } from 'react';

interface IProps {
  cars: ICar[];
  bodyTypes: [];
}

interface ICarFilter {
  count: number;
  label: string;
}

const LandingPage: NextPage<IProps> = ({ cars, bodyTypes }) => {
  const DEFAULT_FILTER = {
    count: cars.length,
    label: 'All',
  };

  const [currentFilter, setCurrentFilter] = useState<string>(DEFAULT_FILTER.label);

  const getFilters = (): ICarFilter[] => {
    let filters: ICarFilter[] = [DEFAULT_FILTER];

    bodyTypes.forEach((bodyType: string) => {
      let filter = {
        count: cars.filter((car: ICar) => car.bodyType === bodyType)?.length,
        label: bodyType,
      };

      filters = [...filters, filter];
    });

    return filters;
  };

  const carsWithFilter = useMemo(() => {
    if (currentFilter === DEFAULT_FILTER.label) return cars;

    return cars.filter((car: ICar) => car.bodyType === currentFilter);
  }, [currentFilter, cars]);

  if (!cars.length) return <Spinner />;

  return (
    <Block className='container'>
      <Block className='cars-wrapper'>
        <Block className='cars-filter-wrapper'>
          {getFilters().map(({ label, count }: ICarFilter, key: number) => (
            <Text
              className={`car-filter ${currentFilter === label ? 'car-filter__active' : ''}`}
              onClick={() => setCurrentFilter(label)}
              key={key}>
              {label} {`(${count})`}
            </Text>
          ))}
        </Block>
        <Carousel items={carsWithFilter} />
      </Block>
    </Block>
  );
};

export async function getServerSideProps() {
  const cars = await getCars();

  //To get filter options
  const getUniqueBodyItems = (): string[] => {
    let uniqueTypes: string[] = [];
    cars.forEach((car: ICar) => {
      if (!uniqueTypes.find((uniqueType) => uniqueType === car.bodyType)) {
        uniqueTypes.push(car.bodyType);
      }
    });

    return uniqueTypes;
  };

  return {
    props: {
      cars,
      bodyTypes: getUniqueBodyItems(),
    },
  };
}

export default LandingPage;
