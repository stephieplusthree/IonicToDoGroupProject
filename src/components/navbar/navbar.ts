import { Component, Input } from '@angular/core';
import { LoginPage } from '../../pages/login/login'
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';
import { TodotestPage } from '../../pages/todotest/todotest';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  constructor(public navCtrl: NavController, public userServ: UserProvider) {
    console.log(this.userServ.isLoggedIn)
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
