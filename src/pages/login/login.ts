import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodotestPage } from '../todotest/todotest';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToList() {
    this.navCtrl.push(TodotestPage)
    console.log(this.user)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
