// import { Component } from '@angular/core';
// import { NavController} from 'ionic-angular';
//
// /*
// Generated class for the Repos page.
//
// See http://ionicframework.com/docs/v2/components/#navigation for more info on
// Ionic pages and navigation.
// */
// @Component({
//   selector: 'page-repos',
//   templateUrl: 'repos.html'
// })
// export class ReposPage {
//
//   constructor(public navCtrl: NavController) {}
//
//   ionViewDidLoad() {
//     console.log('Hello Repos Page');
//   }
//
// }

// core stuff
import { Component } from '@angular/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { NgZone } from "@angular/core";

// plugins
import { IBeacon } from 'ionic-native';

// providers
import { BeaconProvider } from '../../providers/beacon-provider'

// models
import { BeaconModel } from '../../models/beacon-model';

@Component({
  selector: 'page-home',
  templateUrl: 'repos.html'
})
export class ReposPage {
  
  beacons: BeaconModel[] = [];
  zone: any;
  
  constructor(public navCtrl: NavController, public platform: Platform, public beaconProvider: BeaconProvider, public events: Events) {
    // required for UI update
    this.zone = new NgZone({ enableLongStackTrace: false });
  }
  
  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.beaconProvider.initialise().then((isInitialised) => {
        if (isInitialised) {
          this.listenToBeaconEvents();
        }
      });
    });
  }
  
  listenToBeaconEvents() {
    this.events.subscribe('didRangeBeaconsInRegion', (data) => {
      
      // update the UI with the beacon list
      this.zone.run(() => {
        
        this.beacons = [];
        
        let beaconList = data.beacons;
        beaconList.forEach((beacon) => {
          let beaconObject = new BeaconModel(beacon);
          this.beacons.push(beaconObject);
        });
        
      });
      
    });
  }
  
}
