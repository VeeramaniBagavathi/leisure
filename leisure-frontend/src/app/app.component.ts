import {Component, OnInit} from "@angular/core";
import {UserService} from "./service/user-roles.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedInUserRoles: string[];
  title = "Leisure";
  lta_links: { path: string, label: string, string?: string[] }[];
  isAdmin = false;

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.getLoggedUserRoles();
  }

  private getLoggedUserRoles() {
    this._userService.getRoles().subscribe(
      roles => {
        this.loggedInUserRoles = roles;
        console.log("roles=" + this.loggedInUserRoles);
        this.lta_links = this.getLTALinks();
        this.isAdmin = this.isLoggedInUserAdmin();
      },
      err => {
        console.log(err);
      }
    )
  }

  private getLTALinks(): { path: string, label: string, string?: string[] }[] {
    return this.headerLinks.filter(link => this.rolesContains(link.roles));
  }

  private rolesContains(roles: string[]): boolean {
    return roles.filter(role => this.loggedInUserRoles.filter(loggedRole => loggedRole === role).length >= 1).length > 0;
  }

  private isLoggedInUserAdmin(): boolean {
    console.log("executing is isLoggedInUserAdmin" + this.loggedInUserRoles.filter(roles => roles === "ROLE_ADMIN").length);
    return this.loggedInUserRoles.filter(roles => roles === "ROLE_ADMIN").length === 1;
  }

  adminLinks = [
    {path: 'admin/booking', label: 'Booking Elements', matIcon: 'assignment'},
    {path: 'admin/carrier', label: 'Carrier', matIcon: 'flight'},
    {path: 'admin/embargo', label: 'Embargo', matIcon: 'visibility'},
    {path: 'admin/removeRequest', label: 'Remove Request', matIcon: 'delete'},
    {path: 'admin/taxExemption', label: 'Tax Exemption', matIcon: 'payment'},
    {path: 'admin/surcharge', label: 'Surcharge', matIcon: 'payment'},
    {path: 'admin/pointOfSale', label: 'Point Of Sale', matIcon: 'map'}
  ];

  headerLinks: { path: string, label: string, roles?: string[] }[] = [
    {path: 'home', label: 'Home', roles: ['ROLE_ADMIN', 'ROLE_LTA', 'ROLE_USER']},
    {path: 'seatAvailability', label: 'Seat availability', roles: ['ROLE_ADMIN', 'ROLE_LTA', 'ROLE_USER']},
    {path: 'ticketPrice', label: 'Ticket price', roles: ['ROLE_ADMIN', 'ROLE_LTA', 'ROLE_USER']},
    {path: 'lta', label: 'LTA', roles: ['ROLE_LTA']},
    {path: 'isaCounters', label: 'ISA counters', roles: ['ROLE_LTA']},
    {path: 'information', label: 'Information', roles: ['ROLE_ADMIN', 'ROLE_LTA', 'ROLE_USER']},
  ];
}
