import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RecentTacosComponent} from './recents/recents.component';
import {SpecialsComponent} from './specials/specials.component';
import {LocationsComponent} from './locations/locations.component';
import {DesignComponent} from './design/design.component';
import {CartComponent} from './cart/cart.component';
import {ApiService} from "./api/api.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CartService} from "./cart/cart.service";
import {RecentTacosService} from "./recents/recents-tacos.service";
import {NonWrapsPipe} from "./recents/NonWrapsPipe";
import {WrapsPipe} from "./recents/WrapsPipe";
import { BigButtonComponent } from './big-button/big-button.component';
import { CloudTitleComponent } from './cloud-title/cloud-title.component';
import { FooterComponent } from './footer/footer.component';
import { GroupBoxComponent } from './group-box/group-box.component';
import { HeaderComponent } from './header/header.component';
import { LittleButtonComponent } from './little-button/little-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RecentTacosComponent,
    SpecialsComponent,
    LocationsComponent,
    DesignComponent,
    CartComponent,
    NonWrapsPipe,
    WrapsPipe,
    BigButtonComponent,
    CloudTitleComponent,
    FooterComponent,
    GroupBoxComponent,
    HeaderComponent,
    LittleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: ApiService, useClass: ApiService },
    { provide: CartService, useClass: CartService },
    { provide: RecentTacosService, useClass: RecentTacosService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
