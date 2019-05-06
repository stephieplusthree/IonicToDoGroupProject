import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';


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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public userServ: UserProvider
              ) { }

  goToList() {
    this.navCtrl.push(HomePage)
    this.userServ.isLoggedIn = true;
  }

  ionViewDidEnter() {
    console.log('ion view did enter')
    this.user = {
      username: '',
      password: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
