import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'taco-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cart: CartService) {

  }

  ngOnInit(): void {
  }

}
