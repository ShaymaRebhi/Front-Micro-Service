import {Component, OnInit} from '@angular/core';
import {CanActivate} from "@angular/router";
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crudtuto-Front';
  constructor(public location: Location) {
  }
  changeNavbar() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if(titlee === 'login' || titlee === 'register'){
      return false;
    }
    else {
      return true;
    }
  }



  ngOnInit(): void {
  }
}
