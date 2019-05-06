import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  constructor() {  }

  isLoggedIn: boolean = false;

  user: any = {
    username: '',
    password: ''
  }

  emptyLogin() {
    this.isLoggedIn = false
    this.user = {
      username: '',
      password: ''
    }

  
  }

}
