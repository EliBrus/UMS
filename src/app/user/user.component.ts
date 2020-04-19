import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from "../classes/user";
import { faAngular, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faBook, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  faAngular = faAngular;
  faFontAwesome = faFontAwesome;
  faBook = faBook;
  faPencil = faPencil;
  @Input('user-data') user: User;
  @Output ('onDeleteUser') onDeleteUser = new EventEmitter();
  @Output ('onSelectUser') onSelectUser = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  DeleteUser(){
    this.onDeleteUser.emit(this.user);
    //this.userService.DeleteUser(this.user);
  }
  UpdateUser(){
    this.onSelectUser.emit(this.user);
    //this.userService.DeleteUser(this.user);
  }

}