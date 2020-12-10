export interface ILocation {
  timeZoneOffsetMinutes?: number;
  timeZone?: string;
  isDaylightSaving?: boolean;
  streetAddress?: string;
  city?: string;
  provinceState?: string;
  country?: string;
  postalCode?: string;
  phoneNumber?: string;
  mapCoordinates?: string;
}
