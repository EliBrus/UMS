import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router ) {
    
  }

  ngOnInit() {
    this.user = new User();
    this.route.params.subscribe(
      (params) => {
        if (params.id) {
          this.user = this.userService.GetUser(+params.id);
        }
      }
    );
  }
  SaveUser() {
    if (this.user.id > 0) {
      this.userService.UpdateUser(this.user);
    } else {
      this.userService.CreateUser(this.user);
    }
    this.router.navigate(['users']);
  }
  ResetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
  BackToUsers() {
    this.router.navigate(['users']);
  }

}