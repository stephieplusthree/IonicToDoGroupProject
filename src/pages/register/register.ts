import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public userServ: UserProvider) {
  }

  navToHomePage(){
    this.navCtrl.push(HomePage)
    this.userServ.isLoggedIn = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
