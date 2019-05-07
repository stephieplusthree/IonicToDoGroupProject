import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskService } from '../../providers/task-service/task-service';
import { Task } from '../../models/task.model';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-view-task',
  templateUrl: 'view-task.html',
})
export class ViewTaskPage {
  task: Task;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private taskService: TaskService) {
      this.task = this.navParams.get('task');
  }

  deleteTask(createDate: number) {
    this.taskService.deleteTask(createDate);
    this.navCtrl.pop();
  }

  toHome() {
    this.navCtrl.push(HomePage)
  }
}
