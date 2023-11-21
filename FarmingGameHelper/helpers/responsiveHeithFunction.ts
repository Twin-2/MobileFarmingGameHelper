import { Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;

export const ResponsiveHeight = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};