import { IOutput } from "./Output";
import { ISensor } from "./Sensor";

export interface IDevice {
  deviceId?: number;
  name?: string;
  sensors?: Array<ISensor>;
  outputs?: Array<IOutput>;
}
