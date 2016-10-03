import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {Message} from "../models/message";

@Injectable()
export class MessageService {

  messages: Message[];

  // Observable Message sources
  private messagesSource: Subject<Message[]> = new Subject<Message[]>();

  // Observable Message streams
  messagesObservable = this.messagesSource.asObservable();

  constructor() {
    this.messages = [];
  }

  addMessage(message : Message) {
    this.messages.push(message);
    this.messagesSource.next(this.messages);
  }

}
