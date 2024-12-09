import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private alertController: AlertController) {}

  async handlePhoneNumbers(numbers: { number: string, carrierName: string }[], updateNumberCallback: (number: string) => void) {
    if (numbers.length === 1) { // For one sim
      updateNumberCallback(numbers[0].number);
    } else if (numbers.length > 1) { // For More than one sim
      const alert = await this.alertController.create({
        header: 'Choose a Phone Number',
        message: 'Please select a phone number.',
        buttons: numbers.map((item) => ({
          text: item.number,
          handler: () => {
            updateNumberCallback(item.number);  
          }
        }))
      });

      await alert.present();
    }
  }
}
