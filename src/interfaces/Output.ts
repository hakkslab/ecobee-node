export interface IOutput {
  name?: string;
  zone?: number;
  outputId?: number;
  type?: string;
  sendUpdate?: boolean;
  activeClosed?: boolean;
  activationTime?: number;
  deactivationTime?: number;
}
