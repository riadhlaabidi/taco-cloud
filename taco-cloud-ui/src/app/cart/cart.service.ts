import { CartItem } from './cart-item';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items$: CartItem[] = [];

  constructor() { }

  addToCart(taco: any) {
    this.items$.push(new CartItem(taco));
  }

  getItemsInCart() {
    return this.items$;
  }

  getCartTotal() {
    let total = 0;
    this.items$.forEach(item => {
      total += item.lineTotal;
    });
    return total;
  }

  emptyCart() {
    this.items$ = [];
  }

}
