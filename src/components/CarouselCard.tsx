import Link from 'next/link';
import { Block, Text } from 'vcc-ui';
import { ICar } from '@src/types/cars';

const CarCard: React.FC<ICar> = ({ modelType, modelName, bodyType, imageUrl, id }) => {
  return (
    <Block className='carousel-card'>
      <Link href={`/learn/${id}`}>
        <Block className='carousel-card-inner'>
          <Text className='car-type'>{bodyType.toUpperCase()}</Text>
          <Block className='model-name-wrapper d-flex'>
            <Text className='model-name'>{modelName}</Text>
            <Text className='model-type'>{modelType}</Text>
          </Block>
          <Block className='car-image-wrapper'>
            <img
              src={imageUrl}
              width={'100%'}
              height={220}
              alt={modelName}
              className='car-image'
            />
          </Block>
        </Block>
      </Link>
      <Block className='d-flex learn-shop-link'>
        <Link href={`/learn/${id}`}>
          <Block className='d-flex icon-link'>
            <Text className='arrow-text'>LEARN</Text>
            <img src={'/images/chevron-small.svg'} width={12} />
          </Block>
        </Link>

        <Link href={`/shop/${id}`}>
          <Block className='d-flex icon-link'>
            <Text className='arrow-text'>SHOP</Text>
            <img src={'/images/chevron-small.svg'} width={12} />
          </Block>
        </Link>
      </Block>
    </Block>
  );
};

export default CarCard;
