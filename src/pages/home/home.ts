import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpServiceProvider} from './../../providers/http-service/http-service';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  UUID:String;
  showLocation="";
  currentCity="Mumbai";
  //initializing the values to default location
  Vehicles={"metadata":{
    "latitude":"0",
    "longitude":"0",
    "city":"Please Enter UUID"
  }}
  constructor(private httpServiceProviders: HttpServiceProvider, public alertCtrl: AlertController) {}

  //calling the service of http get declared in providers
  getDeviceByUUID(){
      this.httpServiceProviders.getDeviceByID(this.UUID).subscribe(data=>{
      if (data.success){
        console.log(data);
        this.Vehicles = data.devices;
        this.CompareCity()
      }
    })
  }
  
  //TO check wheather the location is changed or not
  CompareCity(){
    if (this.currentCity != this.Vehicles.metadata.city){
      this.showPromt()
      this.currentCity = this.Vehicles.metadata.city
    }
  }

  //To create alerts if the city is changed
  showPromt(){
    let alert = this.alertCtrl.create({
      title:'City Alert',
      subTitle: 'Now you are entering in '+this.Vehicles.metadata.city+" city",
      buttons:['OK']
    });
    alert.present();
  }

}
