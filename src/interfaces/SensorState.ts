import { IAction } from './Action';

export interface ISensorState {
  maxValue?: number;
  minValue?: number;
  type?: string;
  actions?: Array<IAction>;
}
