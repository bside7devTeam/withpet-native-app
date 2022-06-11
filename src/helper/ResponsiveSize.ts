import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scaleWidth = SCREEN_WIDTH / 320;

const scaleHeight = SCREEN_HEIGHT / 592;

export function normalize(size: number) {
  const newSize = size * scaleWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
export function normalizeHeight(size: number) {
  const newSize = size * scaleHeight;
  const ratioSize = 1;
  const addSize = (size > 0 ? ratioSize : -ratioSize) * scaleHeight;
  if (Platform.OS === 'ios') {
    return (
      Math.round(PixelRatio.roundToNearestPixel(newSize)) -
      Math.round(PixelRatio.roundToNearestPixel(addSize))
    );
  } else {
    return (
      Math.round(PixelRatio.roundToNearestPixel(newSize)) -
      Math.round(PixelRatio.roundToNearestPixel(addSize))
    );
  }
}
