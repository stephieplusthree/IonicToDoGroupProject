import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from  '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ComponentsModule} from '../components/components.module'
import { UserProvider } from '../providers/user/user';
import { AddTaskPage } from '../pages/add-task/add-task';
import { ViewTaskPage } from '../pages/view-task/view-task';

import { TaskService } from '../providers/task-service/task-service';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AddTaskPage,
    ViewTaskPage  
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),   
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage, 
    RegisterPage,
    AddTaskPage,
    ViewTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    TaskService
  ]
})
export class AppModule {}
