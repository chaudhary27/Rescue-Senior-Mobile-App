import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SMS } from '@ionic-native/sms';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { AlertController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  text: string = 'A message has been sent to a nearby rescuer. If you are in need of immediate medical attention please call 911. Thank you.';
  texte = {
    "number": "",
    "message": "",
  };
  
  constructor(private iab: InAppBrowser, private tts: TextToSpeech, public navCtrl: NavController, public navParams: NavParams, private SMS: SMS, public alertCtrl: AlertController) {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  
  sendSMS(){
    var options={
      replaceLineBreaks: false,
      android: {
        intent: ''
      }
    }
    this.SMS.send('3472338292', 'A patient is need of help near you. Please follow the instructions to rescue. Attached link. http://wwww.rescueseniors.herokuapp.com', options)
    .then(()=>{
      let alert = this.alertCtrl.create({
        title: 'Message Sent.',
        subTitle: 'A text message to a nearby rescuer is sent.',
        buttons: ['OK']
      });
      alert.present();
    },()=>{
      alert("failed");
      
    });
    
  }
  
  async sayText():Promise<any>{
    try{
      await this.tts.speak(this.text);
      console.log("Successfully spoke" + this.text);
    }
    catch(e){
      console.log(e);
    }
  }
  
  open(url: string){
    let browser = this.iab.create(url);
    browser.show();
    
  }
  
  // sendTextMessage() {
  //   this.SMS.send(this.texte.number, this.texte.message).then((result) => {
  //     let successToast = this.toastCtrl.create({
  //       message: "Text message sent successfully",
  //       duration: 3000
  //     })
  //     successToast.present();
  //   }, (error) => {
  //     let errorToast = this.toastCtrl.create({
  //       message: "Text message not sent. :(",
  //       duration: 3000
  //     })
  //     errorToast.present();
  //   });
  // }
  
}
