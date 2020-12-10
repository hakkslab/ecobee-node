import { IClimate } from "./Climate";

export interface IProgram {
  schedule: Array<string[]>;
  climates: Array<IClimate>;
  currentClimateRef?: string;
}
