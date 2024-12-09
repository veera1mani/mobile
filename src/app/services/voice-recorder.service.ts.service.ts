import { Injectable } from '@angular/core';
import { VoiceRecorder, RecordingData, CurrentRecordingStatus } from 'capacitor-voice-recorder';

@Injectable({
  providedIn: 'root',
})
export class VoiceRecorderService {
  constructor() {
    this.checkPermissions();
  }

  async checkPermissions(): Promise<void> {
    const permission = await VoiceRecorder.requestAudioRecordingPermission();
    if (!permission.value) {
      console.error('Microphone permission not granted');
    }
  }

  async startRecording(): Promise<void> {
    try {
      await VoiceRecorder.startRecording();
      console.log('Recording started...');
    } catch (err) {
      console.error('Error starting recording:', err);
    }
  }

  async stopRecording(): Promise<RecordingData | null> {
    try {
      const recordingData = await VoiceRecorder.stopRecording();
      console.log('Recording stopped:', recordingData);
      return recordingData;
    } catch (err) {
      console.error('Error stopping recording:', err);
      return null;
    }
  }

  async getRecordingStatus(): Promise<'RECORDING' | 'STOPPED'> {
    try {
      const status = await VoiceRecorder.getCurrentStatus();
      //Status --> RECORDING PAUSED NONE
      if (status.status === 'RECORDING') {
        return 'RECORDING';
      }
      return 'STOPPED';
    } catch (err) {
      console.error('Error recording status:', err);
      return 'STOPPED';
    }
  }
}
