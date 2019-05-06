import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// MAY BE ABLE TO DELETE THIS IF ROUTING TO HOME PAGE WORKS
import { TodotestPage } from '../todotest/todotest';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {
    username: '',
    password: ''
  }

  isLoggedIn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToList() {
    this.navCtrl.push(HomePage)
    this.isLoggedIn = true;
    console.log(this.user)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
