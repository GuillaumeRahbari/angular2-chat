import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {Message} from "../models/message";

@Injectable()
export class MessageService {

  // Observable Message sources
  private messageSource: Subject<Message> = new Subject<Message>();

  // Observable Message streams
  messageObservable = this.messageSource.asObservable();

  constructor() {
  }

  addMessage(message : Message) {
    this.messageSource.next(message);
  }

}
