import {Component, OnInit} from "@angular/core";
import {UserService} from "../../service/user-roles.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userRolesService: UserService) {
  }

  project_version = "";

  ngOnInit() {
    this.userRolesService.getProjectVersion().subscribe(
      version => {
        this.project_version = version
      },
      err => {
        console.log(err);
      }
    )
  }

}
