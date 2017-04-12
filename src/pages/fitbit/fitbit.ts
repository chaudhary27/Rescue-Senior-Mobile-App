import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Fitbit } from '../../models/fitbit';
import {  FitbitUsers } from '../../providers/fitbit';
import firebase from 'firebase';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-fitbit',
  templateUrl: 'fitbit.html'
})
export class FitbitPage {
  
  // fitbits: Fitbit[]
  fitbits: any;
  times: any;
  heartRates: FirebaseListObservable<any>;
  // timestamp: FirebaseListObservable<any>;
  // public fitbitusers: FitbitUsers
  // public navParams: NavParams
  constructor(public navCtrl: NavController, angFire: AngularFire,public navParams: NavParams,public fitbitusers: FitbitUsers) {
    fitbitusers.load().subscribe(fitbits => {
      this.fitbits = fitbits;
      // console.log(this.fitbits);
    });
    this.heartRates = angFire.database.list('/heart_rate_zones');
    // let data = firebase.database().ref('/time_stamp');
    // data.once('value').then(function(snapshot) {
    //   this.timestamp = snapshot.val();
    //   console.log(this.timestamp);
    // });
  }
  
  // fetchData(){
  //   let data = firebase.database().ref('/time_stamp');
  //   data.once('value').then(function(snapshot) {
  //     let time = snapshot.val();
  //     console.log(time);
  //   });
  // }
  
}
