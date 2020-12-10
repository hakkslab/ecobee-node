import { IElectricityTier } from './ElectricityTier';

export interface IElectricityDevice {
  name?: string;
  tiers?: Array<IElectricityTier>;
  lastUpdate?: string;
  cost?: Array<string>;
  consumption?: Array<string>;
}
