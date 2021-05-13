import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toasterService';
  // check='';
  todos:any=
  [{
    name:'susuhma',
    age:20

  }]
  constructor(private notifyService: NotificationService) {}

  showToasterSuccess() {
    this.notifyService.showSuccess(
      'Data shown successfully !!',
      'ItSolutionStuff.com'
    );
  }
  showToasterError(){
    this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
}

showToasterInfo(){
    this.notifyService.showInfo("This is info", "ItSolutionStuff.com")
}

showToasterWarning(){
    this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
}
addTodo(newtodo:any){
  var newTodo:any={
    name:newtodo,
    age:22

  }
  this.todos.push(newTodo)


}
deleteTodo(i:number){
  this.todos.splice(i,1)
  

}
}
