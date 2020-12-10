export interface IAction {
  type?: string;
  sendAlert?: boolean;
  sendUpdate?: boolean;
  activationDelay?: number;
  deactivationDelay?: number;
  minActionDuration?: number;
  heatAdjustTemp?: number;
  coolAdjustTemp?: number;
  activateRelay?: string;
  activateRelayOpen?: boolean;
}
