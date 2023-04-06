import Link from 'next/link';
import React from 'react';
import { ICar } from '@src/types/cars';
import { Block, Text, Link as VCCLink } from 'vcc-ui';

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
        <VCCLink href={`/learn/${id}`} arrow='right'>
          Learn
        </VCCLink>
        <VCCLink href={`/shop/${id}`} arrow='right'>
          Shop
        </VCCLink>
      </Block>
    </Block>
  );
};

export default CarCard;
