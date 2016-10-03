import { Component } from '@angular/core';
import {UserService} from "../../core/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent{

  users: User[];

  constructor(private userService: UserService) {
    this.users= [];
    userService.userObservable.subscribe(
      user => {
        this.users.push(user);
      }
    );
  }



}
