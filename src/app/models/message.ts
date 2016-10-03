import {User} from "./user";
export class Message {
  user: User;
  message: string;

  constructor(user: User, message: string){
    this.user = user;
    this.message = message;
  }
}
