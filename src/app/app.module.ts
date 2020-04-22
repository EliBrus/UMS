import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { UserService } from "./services/user.service";
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import {RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
      path: '',
      redirectTo: 'users',
      pathMatch: 'full'
  },
  {
      path: 'users/new',
      component: UserDetailComponent
  }
  ,
  {
      path: 'users/:id/edit',
      component: UserDetailComponent
  }
  ,
  {
      path: 'users/:id/show',
      component: UserDataComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, UserComponent, UserDetailComponent, NavComponent, ModalBasicComponent, UserDataComponent ],
  providers: [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
