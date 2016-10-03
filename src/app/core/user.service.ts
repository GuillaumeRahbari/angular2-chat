import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UuidService } from './uuid.service';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class UserService {

  // Observable User sources
  private userSource: Subject<User> = new Subject<User>();

  // Observable User streams
  userObservable = this.userSource.asObservable();

  constructor(private uuidService: UuidService) {
  }

  addUser(user : User) {
    user.id = this.uuidService.generateUUID();
    this.userSource.next(user);
  }

}
