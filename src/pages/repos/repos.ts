// core stuff
import { Component } from '@angular/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { NgZone } from "@angular/core";
import firebase from 'firebase';
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
          firebase.database().ref('userBeacon').set({
            beaconObject: beaconObject
          });
        });
      });
    });
  }
  
  fetchLocation() {
    let data = firebase.database().ref('/userBeacon/beaconObject/beacon');
    data.on('value', function(snapshot){
      let locDataVals = [];
      if (snapshot.val().major == '995' && snapshot.val().minor == '40651'){
        let indoorLocation = "Nac, Rm 7/106";
        locDataVals.push(indoorLocation);
        let accuracy = snapshot.val().accuracy;
        locDataVals.push(accuracy);
        let proximity = snapshot.val().proximity;
        locDataVals.push(proximity);
      }
      console.log(locDataVals);
    });
  }
  
}
