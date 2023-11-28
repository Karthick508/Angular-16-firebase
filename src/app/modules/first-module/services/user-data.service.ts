import { Injectable } from '@angular/core';
import { UserContacts } from '../resolver/user-list-resolver.resolver';


export const userContactsArray: UserContacts[] = [
  { name: 'John Doe', age: 25 },
  { name: 'Alice Johnson', age: 30 },
  { name: 'Bob Smith', age: 28 },
  { name: 'Eva Williams', age: 22 },
  { name: 'Michael Brown', age: 35 },
  { name: 'Olivia Miller', age: 27 },
  { name: 'Daniel Davis', age: 32 },
  { name: 'Sophia Wilson', age: 26 },
  { name: 'David Taylor', age: 29 },
  { name: 'Emma Anderson', age: 31 },
];

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  

  constructor() { }

  getUserData(){
    const data = userContactsArray;
    return data;
  }
}
