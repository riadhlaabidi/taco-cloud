import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RecentTacosComponent} from "./recents/recents.component";
import {SpecialsComponent} from "./specials/specials.component";
import {LocationsComponent} from "./locations/locations.component";
import {DesignComponent} from "./design/design.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recents', component: RecentTacosComponent },
  { path: 'specials', component: SpecialsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'design', component: DesignComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
