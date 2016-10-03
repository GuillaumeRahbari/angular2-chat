import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UuidService } from './uuid.service';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class UserService {

  private users: User[];

  // Observable User[] sources
  private usersSource: Subject<User[]> = new Subject<User[]>();

  // Observable User[] streams
  usersObservable = this.usersSource.asObservable();

  constructor(private uuidService: UuidService) {
    this.users = [];
  }

  getUsers(){
    return this.users;
  }

  addUser(user : User) {
    user.id = this.uuidService.generateUUID();
    this.users.push(user);
    this.usersSource.next(this.users);
  }

}
