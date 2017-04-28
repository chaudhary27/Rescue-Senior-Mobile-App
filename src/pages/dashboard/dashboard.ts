import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { Shake } from '@ionic-native/shake';

import { NavController, NavParams } from 'ionic-angular';

import { SMS } from '@ionic-native/sms';

import { TextToSpeech } from '@ionic-native/text-to-speech';

import { AlertController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import {  FitbitUsers } from '../../providers/fitbit';


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  devices: any;
  inactives: any;
  batteries: any;
  steps: any;
  restings: any;
  
  text: string = 'Finding a rescuer near you. A message has been sent to a nearby rescuer. If you are in need of immediate medical attention please call 911. Thank you.';
  // texte = {
  //   "number": "",
  //   "message": "",
  // };
  
  constructor(public fitbitusers: FitbitUsers, private iab: InAppBrowser,
    private tts: TextToSpeech, public navCtrl: NavController,
    private platform: Platform, private shake: Shake,
    public navParams: NavParams, private SMS: SMS,public alertCtrl: AlertController) {
      
      if (this.platform.is('cordova')) {
        this.platform.ready().then(() => {
          this.shake.startWatch().subscribe(data => {
            alert('shake!');
          })
        });
      }
      fitbitusers.load2().subscribe(device => {
        this.devices = device;
        // console.log(this.devices);
      });
      fitbitusers.load3().subscribe(inactive => {
        this.inactives = inactive;
        // console.log(this.devices);
      });
      fitbitusers.load4().subscribe(battery => {
        this.batteries = battery;
        // console.log(this.devices);
      });
      fitbitusers.load5().subscribe(step => {
        this.steps = step;
        // console.log(this.devices);
      });
      fitbitusers.load6().subscribe(resting => {
        this.restings = resting;
        // console.log(this.devices);
      });
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
      this.SMS.send('3472338292', 'A patient is in need of help near you. Please follow the instructions to rescue. Click on the link to access patient location and health data http://rescueseniors.herokuapp.com/users/1', options)
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
    
    
  }
  