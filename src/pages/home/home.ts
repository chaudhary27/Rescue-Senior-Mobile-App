import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {  FitbitUsers } from '../../providers/fitbit';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  beaconArray: FirebaseListObservable<any>;
  fitbits: any;
  times: any;
  // public navParams: NavParams,public fitbitusers: FitbitUsers
  constructor(public navCtrl: NavController, angFire: AngularFire,public navParams: NavParams,public fitbitusers: FitbitUsers) {
    // window.localStorage.removeItem('currentuser');
    this.beaconArray = angFire.database.list('/userBeacon/Beacons');
    fitbitusers.load1().subscribe(times => {
      this.times = times;
      let myDate = new Date(this.times*1000);
      this.times = myDate;
      // console.log(myDate);
      console.log(this.times);
    });
    
    if (!this.isLoggedin()) {
      console.log('You are not logged in');
      this.navCtrl.push(LoginPage);
    }
    
  }
  
  isLoggedin() {
    if (window.localStorage.getItem('currentuser')) {
      console.log("You are logged in");
      return true;
    }
  }
  
}
