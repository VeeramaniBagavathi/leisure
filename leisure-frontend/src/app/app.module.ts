import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {AppComponent} from "./app.component";
import {AdminModule} from "./admin/admin.module";
import {AppRoutingModule} from "./route/app-route-routing.module";
import {ComponentModule} from "./component/component.module";
import {ServiceModule} from "./service/service.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    AdminModule,
    ComponentModule,
    ServiceModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

