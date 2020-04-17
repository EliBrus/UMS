import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';

import { UserService } from "./services/user.service";
import { UserComponent } from './user/user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, UserComponent ],
  providers: [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
