import { Component } from '@angular/core';
import { LoginPage } from '../../pages/login/login'
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  toLogin() {
    this.navCtrl.push(LoginPage)
  }
  toHome() {
    this.navCtrl.push(HomePage)
    console.log('toHome')
  }
  toRegister() {
    this.navCtrl.push(RegisterPage)
  }
  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello NavbarComponent Component');
    this.text = 'Hello World';

  
  }

}
