import { Component, Input } from '@angular/core';
import { LoginPage } from '../../pages/login/login'
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';
import { TodotestPage } from '../../pages/todotest/todotest';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  @Input() isLoggedIn: boolean;

  constructor(public navCtrl: NavController) {
 
  }

  toLogin() {
    this.navCtrl.push(LoginPage)
  }

  toHome() {
    this.navCtrl.push(HomePage)
  }
  
  toRegister() {
    this.navCtrl.push(RegisterPage)
  }

  toTodo() {
    this.navCtrl.push(TodotestPage)
  }

}
