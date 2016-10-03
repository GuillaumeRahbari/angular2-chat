import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UuidService } from './uuid.service';

@Injectable()
export class UserService {

  private users : User[];

  constructor(private uuidService: UuidService) {
    this.users = [];
  }

  getUsers(){
    return this.users;
  }

  addUser(user : User) {
    user.id = this.uuidService.generateUUID();
    this.users.push(user);
  }

}
