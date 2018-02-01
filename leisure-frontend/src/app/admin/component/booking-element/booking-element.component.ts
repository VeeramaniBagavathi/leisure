import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-booking-element',
  templateUrl: './booking-element.component.html',
  styleUrls: ['./booking-element.component.css']
})
export class BookingElementComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
