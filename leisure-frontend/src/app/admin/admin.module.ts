import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BookingElementComponent} from "./component/booking-element/booking-element.component";
import {CarrierComponent} from "./component/carrier/carrier.component";
import {EmbargoComponent} from "./component/embargo/embargo.component";
import {RemoveRequestComponent} from "./component/remove-request/remove-request.component";
import {TaxExemptionComponent} from "./component/tax-exemption/tax-exemption.component";
import {SurchargeComponent} from "./component/surcharge/surcharge.component";
import {PointOfSaleComponent} from "./component/point-of-sale/point-of-sale.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookingElementComponent, CarrierComponent, EmbargoComponent, RemoveRequestComponent, TaxExemptionComponent, SurchargeComponent, PointOfSaleComponent],
  exports: [
    BookingElementComponent, CarrierComponent, EmbargoComponent, RemoveRequestComponent, TaxExemptionComponent, SurchargeComponent, PointOfSaleComponent
  ]
})
export class AdminModule {
}
