import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../interfaces/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  users: User[] = [];
  @Output ('updateUser') updateUser = new EventEmitter<User>();
  constructor(private service: UserService) {
    
   }
  ngOnInit(){
    this.users = this.service.GetUsers();
  }
  OnDeleteUser(user: User) {
    this.service.DeleteUser(user);
  }
  OnSelectUser(user: User) {
    this.updateUser.emit(user);
  }
}
