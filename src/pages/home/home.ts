import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  beaconArray: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, angFire: AngularFire) {
    // window.localStorage.removeItem('currentuser');
    this.beaconArray = angFire.database.list('/userBeacon/beaconArray');
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
