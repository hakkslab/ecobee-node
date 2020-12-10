import { IVoiceEngine } from './VoiceEngine';

// Audio object
// https://www.ecobee.com/home/developer/api/documentation/v1/objects/Audio.shtml
export interface IAudio {
  playbackVolume?: number;
  microphoneEnabled?: boolean;
  soundAlertVolume?: number;
  soundTickVolume?: number;
  voiceEngines?: Array<IVoiceEngine>;
}
