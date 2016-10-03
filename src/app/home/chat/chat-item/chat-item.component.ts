import {Component, Input} from '@angular/core';
import {User} from "../../../models/user";

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.sass']
})
export class ChatItemComponent{

  @Input() user: User;

  userMsg: string;

  constructor() { }

  /**
   * This function is triggered when we click on the form's submit button.
   */
  onSubmit() {
  }

}
