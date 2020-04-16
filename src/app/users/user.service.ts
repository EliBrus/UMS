import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  constructor(){
  }
  GetUsers() {
    return [
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
  }
}