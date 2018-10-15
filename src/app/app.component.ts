import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {arrayify} from 'tslint/lib/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task 1 | InventorAcademy';
  users = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe((response) => {
        this.users = arrayify(response);
      });
  }
}
