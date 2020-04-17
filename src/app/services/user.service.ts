import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";

@Injectable()
export class UserService {
  users: User[] = [
      {
        name :'Mario',
        lastname :'Verdi',
        email :'ciccio@gmail.com',
        fiscalcode :'HFGFKDUEEFEFLE9',
        province: 'Milano',
        phone: '253344244',
        age: 13
      },
      {
        name :'Giuseppe',
        lastname :'Rossi',
        email :'ciccio@gmail.com',
        fiscalcode :'HFGFKDUEEFEFLE9',
        province: 'Milano',
        phone: '253344244',
        age: 14
      },
      {
        name :'Giovanni',
        lastname :'Bianchi',
        email :'ciccio@gmail.com',
        fiscalcode :'HFGFKDUEEFEFLE9',
        province: 'Milano',
        phone: '253344244',
        age: 16
      },
      {
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
}