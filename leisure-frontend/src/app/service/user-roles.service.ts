import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  roles: string[] = ['ROLE_ADMIN'];

  private apiRolesUrl = '/api/roles';
  private apiVersionUrl = '/api/version';

  constructor(private http: HttpClient) {
  }

  getRoles(): Observable<string[]> {
    return this.http.get(this.apiRolesUrl)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getProjectVersion(): Observable<string> {
    return this.http.get(this.apiVersionUrl)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  public getLoggedInUserRoles(): string[] {
    console.log("invoked logged user role service");
    return this.roles;
  }
}
