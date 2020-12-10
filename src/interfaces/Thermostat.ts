import { IAudio } from './Audio';
import { IAlert } from './Alert';
import { IExtendedRuntime } from './ExtendedRuntime';
import { IRuntime } from './Runtime';
import { ISettings } from './Settings';
import { IElectricity } from './Electricity';
import { IDevice } from './Device';
import { ILocation } from './Location';
import { ITechnician } from './Technician';
import { IUtility } from './Utility';
import { IManagement } from './Management';
import { IWeather } from './Weather';
import { IEvent } from './Event';
import { IProgram } from './Program';
import { IHouseDetails } from './HouseDetails';
import { INotificationSettings } from './NotificationSettings';
import { IVersion } from './Version';
import { ISecuritySettings } from './SecuritySettings';
import { IRemoteSensor } from './RemoteSensor';

// Thermostat object
// https://www.ecobee.com/home/developer/api/documentation/v1/objects/Thermostat.shtml
export interface Thermostat {
  identifier: string;
  name?: string;
  thermostatRev?: string;
  isRegistered?: boolean;
  modelNumber?: string;
  brand?: string;
  features?: string;
  lastModified?: string;
  thermostatTime?: string;
  utcTime?: string;
  audio?: IAudio;
  alerts?: Array<IAlert>;
  settings?: ISettings;
  runtime?: IRuntime;
  extendedRuntime?: IExtendedRuntime;
  electricity?: IElectricity;
  devices?: Array<IDevice>;
  location?: ILocation;
  technician?: ITechnician;
  utility?: IUtility;
  management?: IManagement;
  weather?: IWeather;
  events?: Array<IEvent>;
  program?: IProgram;
  houseDetails?: IHouseDetails;
  equipmentStatus?: string;
  notificationSettings?: INotificationSettings;
  version?: IVersion;
  securitySettings?: ISecuritySettings;
  remoteSensors?: Array<IRemoteSensor>;
}
