import { IRemoteSensorCapability } from './RemoteSensorCapability';

export interface IRemoteSensor {
  id?: string;
  name?: string;
  type?: string;
  code?: string;
  inUse?: boolean;
  capability?: Array<IRemoteSensorCapability>;
}
