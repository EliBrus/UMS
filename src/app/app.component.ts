import { Component } from '@angular/core';
import { User } from './interfaces/user'

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  userSelected: User;
  UpdateUser(user: User) {
    this.userSelected = user;
  }
}
