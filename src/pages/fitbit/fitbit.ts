import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Fitbit } from '../../models/fitbit';
import {  FitbitUsers } from '../../providers/fitbit';

/*
Generated class for the Fitbit page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
selector: 'page-fitbit',
templateUrl: 'fitbit.html'
})
export class FitbitPage {

fitbits: Fitbit[]

constructor(public navCtrl: NavController, public navParams: NavParams, public fitbitusers: FitbitUsers) {
fitbitusers.load().subscribe(fitbits => {
this.fitbits = fitbits;
})
}

// ionViewDidLoad() {
//   this.fitbitData.getFitbitData();
// }

}
