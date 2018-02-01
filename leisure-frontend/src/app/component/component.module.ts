import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SeatAvailabilityComponent} from "./seat-availability/seat-availability.component";
import {TicketPriceComponent} from "./ticket-price/ticket-price.component";
import {IsaCountersComponent} from "./isa-counters/isa-counters.component";
import {InformationComponent} from "./information/information.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeatAvailabilityComponent, TicketPriceComponent, IsaCountersComponent, InformationComponent, HomeComponent],
  exports: [SeatAvailabilityComponent, TicketPriceComponent, IsaCountersComponent, InformationComponent]
})
export class ComponentModule {
}
