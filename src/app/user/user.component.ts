import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from "../classes/user";
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User;
  @Output ('onDeleteUser') onDeleteUser = new EventEmitter();
  @Output ('onSelectUser') onSelectUser = new EventEmitter();
  constructor(private userService: UserService , private route: Router) { }

  ngOnInit() {
  }
  DeleteUser(){
    this.onDeleteUser.emit(this.user);
    //this.userService.DeleteUser(this.user);
  }
  UpdateUser(){
    this.route.navigate(['users', this.user.id, 'edit']);
    this.onSelectUser.emit(this.user);
  }
  ShowUser(){
    this.route.navigate(['users', this.user.id, 'show']);
    this.onSelectUser.emit(this.user);
  }

}