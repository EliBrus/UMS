import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  public title = "User Detail";
  private user: User;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
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
  BackToUsers() {
    this.router.navigate(['users']);
  }

}