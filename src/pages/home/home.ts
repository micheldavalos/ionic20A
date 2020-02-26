import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alumnos = [];

  constructor(public navCtrl: NavController,
              public http: HttpClient) {

  }

  getAlumnos() {
    console.log('getAlumnos');

    this.http.get('/escuela/alumno/')
    .subscribe(data => {
      console.log(JSON.stringify(data));
      this.alumnos = data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

}
