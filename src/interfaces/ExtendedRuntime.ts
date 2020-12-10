// ExtendedRuntime object
// https://www.ecobee.com/home/developer/api/documentation/v1/objects/ExtendedRuntime.shtml
export interface IExtendedRuntime {
  lastReadingTimestamp?: string;
  runtimeDate?: string;
  runtimeInterval?: number;
  actualTemperature?: Array<number>;
  actualHumidity?: Array<number>;
  desiredHeat?: Array<number>;
  desiredCool?: Array<number>;
  desiredHumidity?: Array<number>;
  desiredDehumidity?: Array<number>;
  dmOffset?: Array<number>;
  hvacMode?: Array<string>;
  heatPump1?: Array<number>;
  heatPump2?: Array<number>;
  auxHeat1?: Array<number>;
  auxHeat2?: Array<number>;
  auxHeat3?: Array<number>;
  cool1?: Array<number>;
  cool2?: Array<number>;
  fan?: Array<number>;
  humidifier?: Array<number>;
  dehumidifier?: Array<number>;
  economizer?: Array<number>;
  ventilator?: Array<number>;
  currentElectricityBill?: number;
  projectedElectricityBill?: number;
}
