import { IRemoteSensor } from "./RemoteSensor";

export interface IClimate {
  name: string;
  climateRef?: string;
  isOccupied?: boolean;
  isOptimized?: boolean;
  coolFan?: string;
  heatFan?: string;
  vent?: string;
  ventilatorMinOnTime?: number;
  owner?: string;
  type?: string;
  colour?: number;
  coolTemp?: number;
  heatTemp?: number;
  sensors?: Array<IRemoteSensor>;
}
