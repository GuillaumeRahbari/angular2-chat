import { Component } from '@angular/core';

import { UserService } from '../../core/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.sass']
})
export class NameComponent {

  userName : string;

  constructor(private userService : UserService) {
   }

  /**
   * This function is triggered when we click on the form's submit button.
   */
  onSubmit() {
    this.userService.addUser(new User(this.userName));
    this.resetUserName()
  }

  private resetUserName() {
    this.userName = '';
  }
}

