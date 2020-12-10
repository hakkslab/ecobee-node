// Alert object
// https://www.ecobee.com/home/developer/api/documentation/v1/objects/Alert.shtml
export interface IAlert {
  acknowledgeRef?: string;
  date?: string;
  time?: string;
  severity?: string;
  text: string;
  alertNumber?: number;
  alertType?: string;
  isOperatorAlert?: boolean;
  reminder?: string;
  showIdt?: boolean;
  showWeb?: boolean;
  sendEmail?: boolean;
  acknowledgement?: string;
  remindMeLater?: boolean;
  thermostatIdentifier?: string;
  notificationType?: string;
}
