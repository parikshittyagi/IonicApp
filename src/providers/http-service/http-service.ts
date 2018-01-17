import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/interval';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';  


@Injectable()
export class HttpServiceProvider {

  constructor(public http: Http) {}

  //Observable used to get information about the location after some intervals
  getDeviceByID(UUID){
    let ep='http://localhost:3050/device/'+UUID;
    return Observable.interval(2000)
    .switchMap(()=>this.http.get(ep).map(res => res.json()))
  }
}
