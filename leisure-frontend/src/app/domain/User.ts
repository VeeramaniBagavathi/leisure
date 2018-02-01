/**
 * Created by x080013 on 1/25/2018.
 */


export class User {
  firstName: string;
  lstName: string;
  emil: string;
  roles: string[];

  constructor(firstName: string, lstName: string, emil: string, roles: string[]) {
    this.firstName = firstName;
    this.lstName = lstName;
    this.emil = emil;
    this.roles = roles;
  }
}
