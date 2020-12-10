import { IEquipmentSetting } from "./EquipmentSetting";
import { IGeneralSetting } from "./GeneralSetting";
import { ILimitSetting } from "./LimitSetting";

export interface INotificationSettings {
  emailAddresses?: Array<string>;
  emailNotificationsEnabled?: boolean;
  equipment?: Array<IEquipmentSetting>;
  general?: Array<IGeneralSetting>;
  limit?: Array<ILimitSetting>;
}
