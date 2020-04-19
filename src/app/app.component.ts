import { Component } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  showForm: boolean = false;
  userSelected: User = new User();

  UpdateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }
  NewUser() {
    this.userSelected = new User();
    this.showForm = true;
  }
}
