import {Component, Input} from '@angular/core';
import {User} from "../../../models/user";
import {MessageService} from "../../../core/message.service";
import {Message} from "../../../models/message";

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.sass']
})
export class ChatItemComponent{

  @Input() user: User;

  userMsg: string;

  messages: Message[];

  constructor(private messageService: MessageService) {
    this.messages = [];
    this.messageService.messagesObservable.subscribe(
      messages => {
        this.messages = messages;
      }
    );
  }

  /**
   * This function is triggered when we click on the form's submit button.
   */
  onSubmit() {
    this.messageService.addMessage(new Message(this.user, this.userMsg));
    this.resetMessage();
  }

  private resetMessage() {
    this.userMsg = '';
  }
}
