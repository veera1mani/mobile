import { Component, OnInit } from '@angular/core';
import { Sim } from '@jonz94/capacitor-sim';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { VoiceRecorderService } from 'src/app/services/voice-recorder.service.ts.service';
import { PhoneService } from 'src/app/services/phone.service';

const getSimCards = async () => {
  const { simCards } = await Sim.getSimCards();
  // console.log(simCards);
  return simCards;
}


@Component({
  selector: 'app-home-bottom-navi',
  templateUrl: './home-bottom-navi.page.html',
  styleUrls: ['./home-bottom-navi.page.scss'],
  
})
export class HomeBottomNaviPage implements OnInit {
  
  isRecording = false;
  recordedFileObj: any = null;
  audio = new Audio();
  phoneNumberInput: string = '';
  latitude: number = 0;
  longitude: number = 0;

  /* 
  * For Location
  * For Phone Number
  * For Audio Recoding
  */

  constructor(private voiceRecorderService: VoiceRecorderService, private alertController: AlertController, private phoneService: PhoneService) {
  }

  ngOnInit() {
    this.getPhoneNumber();
    this.getCurrentLocations();
  }

  // ----------> For Location
  async requestLocation() {
    try {
      await Geolocation.requestPermissions();
    } catch (error) {
      console.error('Error requesting location permission', error);
    }
  }

  async getCurrentLocations() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;

      console.log('Current Location:', this.latitude, this.longitude);
    } catch (error: any) {
      console.error('Error in location', error);
    }
  }

  // ------------> For Phone Number
  async getPhoneNumber() {
    const simCards = await getSimCards();
    this.checkPhoneNumbers(simCards);
  }

  async checkPhoneNumbers(simArr: any) { //numbers: { number: string, carrierName: string }[]
    await this.phoneService.handlePhoneNumbers(simArr, (selectedNumber: string) => {
      this.phoneNumberInput = selectedNumber;
    });
  }


  // --------------> For Recording 
  playRecording(): void {
    const base64Sound = this.recordedFileObj.recordDataBase64
    const mimeType = this.recordedFileObj.mimeType
    const audioRef = new Audio(`data:${mimeType};base64,${base64Sound}`)
    audioRef.oncanplaythrough = () => audioRef.play()
    audioRef.load()
  }

  async toggleRecording(): Promise<void> {
    const status = await this.voiceRecorderService.getRecordingStatus();
    this.isRecording = status === 'RECORDING';

    if (this.isRecording) {
      const recording = await this.voiceRecorderService.stopRecording();
      this.isRecording = false;
      if (recording?.value) {
        debugger
        this.recordedFileObj = recording.value; //Store this audio object in API
        console.log('Recorded Audio ------------------>');
        console.log(this.recordedFileObj);
      }
    } else {
      await this.voiceRecorderService.startRecording();
      this.isRecording = true;
      this.recordedFileObj = null;
    }
  }



}
