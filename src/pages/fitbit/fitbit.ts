import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Fitbit } from '../../models/fitbit';
// import {  FitbitUsers } from '../../providers/fitbit';
// import firebase from 'firebase';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-fitbit',
  templateUrl: 'fitbit.html'
})
export class FitbitPage {
  
  // fitbits: Fitbit[]
  heartRates: FirebaseListObservable<any>;
  // public fitbitusers: FitbitUsers
  // public navParams: NavParams
  constructor(public navCtrl: NavController, angFire: AngularFire) {
    // fitbitusers.load().subscribe(fitbits => {
    //   this.fitbits = fitbits;
    // });
    this.heartRates = angFire.database.list('/heart_rate_zones');
  }
  
}
