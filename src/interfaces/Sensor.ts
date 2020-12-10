import { ISensorState } from './SensorState';

export interface ISensor {
  name?: string;
  manufacturer?: string;
  model?: string;
  zone?: number;
  sensorId?: number;
  type?: string;
  usage?: string;
  numberOfBits?: number;
  bconstant?: number;
  thermistorSize?: number;
  tempCorrection?: number;
  gain?: number;
  maxVoltage?: number;
  multiplier?: number;
  states?: Array<ISensorState>;
}
