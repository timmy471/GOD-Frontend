import { ICar } from 'src/types/cars';
import axiosInstance from 'src/services/axiosInstance';

export const getCars = async (): Promise<ICar[]> => {
  try {
    const { data } = await axiosInstance.get('cars');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

export const getCar = async (carId?: string | string[]): Promise<ICar | string> => {
  try {
    if (!carId) return 'Car not found';
    const { data } = await axiosInstance.get('cars');

    const carData = JSON.parse(data).find((car: ICar) => car.id === carId);
    if (!!carData) return carData;

    return 'Car not found';
  } catch (error) {
    return 'Something went wrong';
  }
};
