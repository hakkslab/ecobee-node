export interface IEvent {
  type?: string;
  name?: string;
  running?: boolean;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  isOccupied?: boolean;
  isCoolOff?: boolean;
  isHeatOff?: boolean;
  coolHoldTemp?: number;
  heatHoldTemp?: number;
  fan?: string;
  vent?: string;
  ventilatorMinOnTime?: number;
  isOptional?: boolean;
  isTemperatureRelative?: boolean;
  coolRelativeTemp?: number;
  heatRelativeTemp?: number;
  isTemperatureAbsolute?: boolean;
  dutyCyclePercentage?: number;
  fanMinOnTime?: number;
  occupiedSensorActive?: boolean;
  unoccupiedSensorActive?: boolean;
  drRampUpTemp?: number;
  drRampUpTime?: number;
  linkRef?: string;
  holdClimateRef?: string;
  fanSpeed?: string;
}
