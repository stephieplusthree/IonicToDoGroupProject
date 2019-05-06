import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';


//PAGE(S)
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //Set up your ROOT Page!
  rootPage:any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}

