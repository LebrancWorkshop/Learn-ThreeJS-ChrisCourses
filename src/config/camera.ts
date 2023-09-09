import { config } from './config';
import { ICameraConfig } from '../@types';

export const cameraConfig: ICameraConfig = {
  fov: 75,
  aspect: config.width / config.height,
  near: 0.1,
  far: 100
};
