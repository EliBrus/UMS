import { Injectable } from "@angular/core";
import { User } from "../classes/user";

@Injectable()
export class UserService {
  users: User[] = [
      {
        id: 1,
        name :'Mario',
        lastname :'Verdi',
        email :'ciccio@gmail.com',
        fiscalcode :'HFGFKDUEEFEFLE9',
        province: 'Milano',
        phone: '253344244',
        age: 13
      },
      {
        id: 2,
        name :'Giuseppe',
        lastname :'Rossi',
        email :'ciccio@gmail.com',
        fiscalcode :'HFGFKDUEEFEFLE9',
        province: 'Milano',
        phone: '253344244',
        age: 14
      },
      {
        id: 3,
        name :'Giovanni',
        lastname :'Bianchi',
        email :'ciccio@gmail.com',
        fiscalcode :'HFGFKDUEEFEFLE9',
        province: 'Milano',
        phone: '253344244',
        age: 16
      },
      {
        id: 4,
        name :'Giacomo',
        lastname :'Leopardi',
        email :'ciccio@gmail.com',
        fiscalcode :'HFGFKDUEEFEFLE9',
        province: 'Milano',
        phone: '253344244',
        age: 22
      }
    ];
  constructor(){
  }
  GetUsers() {
    return this.users;
  }
  DeleteUser(user) {
    let index = this.users.indexOf(user);
    if (index >=0) {
      this.users.splice(index, 1);
    }
  }
  UpdateUser(user: User) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }
  CreateUser(user: User) {
    this.users.splice(0, 0, user);
  }
}