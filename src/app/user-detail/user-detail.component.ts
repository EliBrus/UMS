import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: User;
  private _user: User;
  @Input() set user(user: User) {
    this._user = user;
    this.userCopy = Object.assign({}, user);
  }
  get user() {
    return this._user;
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }
  SaveUser() {
    if (this.user.id > 0) {
      this.userService.UpdateUser(this.user);
    } else {
      this.userService.CreateUser(this.user);
    }
  }
  ResetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }

}