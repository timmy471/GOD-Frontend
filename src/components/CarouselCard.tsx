import Link from 'next/link';
import IconText from './IconText';
import { Block, Text } from 'vcc-ui';
import { ICar } from '@src/types/cars';

const CarCard: React.FC<ICar> = ({ modelType, modelName, bodyType, imageUrl, id }) => {
  return (
    <Block className='carousel-card' tabIndex={0}>
      <Link href={`/learn/${id}`}>
        <Block className='carousel-card-inner'>
          <Text className='car-type' tabIndex={-1}>
            {bodyType.toUpperCase()}
          </Text>
          <Block className='model-name-wrapper d-flex'>
            <Text className='model-name' tabIndex={-1}>
              {modelName}
            </Text>
            <Text className='model-type' tabIndex={-1}>
              {modelType}
            </Text>
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
          <IconText
            label='LEARN'
            icon={<img src={'/images/chevron-small.svg'} width={12} />}
          />
        </Link>

        <Link href={`/shop/${id}`}>
          <IconText label='SHOP' icon={<img src={'/images/chevron-small.svg'} width={12} />} />
        </Link>
      </Block>
    </Block>
  );
};

export default CarCard;
