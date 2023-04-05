import { ICar } from 'src/types/cars';
import httpClient from 'src/services/httpClient';

export const getCars = async (): Promise<ICar[]> => {
  try {
    const { data } = await httpClient.get('cars');
    return data;
  } catch (error) {
    return [];
  }
};

export const getCar = async (carId?: string | string[]): Promise<ICar | string> => {
  try {
    if (!carId) return 'Car not found';
    const { data } = await httpClient.get('cars');

    const carData = JSON.parse(data).find((car: ICar) => car.id === carId);
    if (!!carData) return 'Car not found';

    return carData;
  } catch (error) {
    return 'Something went wrong';
  }
};
