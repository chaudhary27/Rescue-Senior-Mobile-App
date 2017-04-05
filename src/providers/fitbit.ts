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
    return this.http.get('assets/heart_rate.json').map(res => <Fitbit[]>res.json());
  }
  
}
