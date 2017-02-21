import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Fitbit } from '../models/fitbit';
/*
Generated class for the Fitbit provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FitbitUsers {
  
  constructor(public http: Http) {
    console.log("Hello Fitbit Data");
  }
  
  load(){
    return this.http.get('assets/heart_rate.json').map(res => <Fitbit[]>res.json());
  }
  
}
