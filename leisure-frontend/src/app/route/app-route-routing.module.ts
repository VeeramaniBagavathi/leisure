import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BookingElementComponent} from "../admin/component/booking-element/booking-element.component";
import {CarrierComponent} from "../admin/component/carrier/carrier.component";
import {EmbargoComponent} from "../admin/component/embargo/embargo.component";
import {TaxExemptionComponent} from "../admin/component/tax-exemption/tax-exemption.component";
import {RemoveRequestComponent} from "../admin/component/remove-request/remove-request.component";
import {SurchargeComponent} from "../admin/component/surcharge/surcharge.component";
import {PointOfSaleComponent} from "../admin/component/point-of-sale/point-of-sale.component";
import {TicketPriceComponent} from "../component/ticket-price/ticket-price.component";
import {SeatAvailabilityComponent} from "../component/seat-availability/seat-availability.component";
import {IsaCountersComponent} from "../component/isa-counters/isa-counters.component";
import {InformationComponent} from "../component/information/information.component";
import {HomeComponent} from "../component/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  //Leisure Links
  {path: 'home', component: HomeComponent},
  {path: 'seatAvailability', component: SeatAvailabilityComponent},
  {path: 'ticketPrice', component: TicketPriceComponent},
  {path: 'isaCounters', component: IsaCountersComponent},
  {path: 'information', component: InformationComponent},

  //Admin routes
  {path: 'admin/booking', component: BookingElementComponent},
  {path: 'admin/carrier', component: CarrierComponent},
  {path: 'admin/embargo', component: EmbargoComponent},
  {path: 'admin/removeRequest', component: RemoveRequestComponent},
  {path: 'admin/taxExemption', component: TaxExemptionComponent},
  {path: 'admin/surcharge', component: SurchargeComponent},
  {path: 'admin/pointOfSale', component: PointOfSaleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
