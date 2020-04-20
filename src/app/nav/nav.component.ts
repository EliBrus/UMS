import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  @Output() onNewUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  NewUser() {
    this.onNewUser.emit();
  }
}