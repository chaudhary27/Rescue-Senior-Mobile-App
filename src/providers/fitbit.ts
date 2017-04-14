import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Fitbit } from '../models/fitbit';


@Injectable()
export class FitbitUsers {
  
  constructor(public http: Http) {
    console.log("Hello Fitbit Data");
  }
  
  load(){
    // return this.http.get('assets/heart_rate.json').map(res => <Fitbit[]>res.json());
    return this.http.get('https://rescuesenior-d31bf.firebaseio.com/time_stamp.json').map(res => res.json());
  }
  
  load1(){
    // return this.http.get('assets/heart_rate.json').map(res => <Fitbit[]>res.json());
    return this.http.get('https://rescuesenior-d31bf.firebaseio.com/userBeacon/createdAt.json').map(res => res.json());
  }
  
  load2(){
    return this.http.get('https://rescuesenior-d31bf.firebaseio.com/device.json').map(res => res.json());
  }
  
  load3(){
    return this.http.get('https://rescuesenior-d31bf.firebaseio.com/inactive_minutes.json').map(res => res.json());
  }
  
  load4(){
    return this.http.get('https://rescuesenior-d31bf.firebaseio.com/device_battery.json').map(res => res.json());
  }
  
  load5(){
    return this.http.get('https://rescuesenior-d31bf.firebaseio.com/steps_count.json').map(res => res.json());
  }
  
  load6(){
    return this.http.get('https://rescuesenior-d31bf.firebaseio.com/resting_heart_rate.json').map(res => res.json());
  }
  
}
