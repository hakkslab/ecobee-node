// Runtime object
// https://www.ecobee.com/home/developer/api/documentation/v1/objects/Runtime.shtml
export interface IRuntime {
  runtimeRev?: string;
  connected?: boolean;
  firstConnected?: string;
  connectDateTime?: string;
  disconnectDateTime?: string;
  lastModified?: string;
  lastStatusModified?: string;
  runtimeDate?: string;
  runtimeInterval?: number;
  actualTemperature?: number;
  actualHumidity?: number;
  rawTemperature?: number;
  showIconMode?: number;
  desiredHeat?: number;
  desiredCool?: number;
  desiredHumidity?: number;
  desiredDehumidity?: number;
  desiredFanMode?: string;
  desiredHeatRange?: Array<number>;
  desiredCoolRange?: Array<number>;
}
