import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})

@Injectable()
export class DesignComponent implements OnInit {

  model = {
    name: '',
    ingredients: new Array<any>()
  };

  allIngredients: any;
  wraps = new Array<any>();
  proteins = new Array<any>();
  veggies = new Array<any>();
  cheeses = new Array<any>();
  sauces = new Array<any>();

  constructor(private httpClient: HttpClient,
              private router: Router,
              private cart: CartService) {
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/ingredientsx')
      .subscribe(data => {
        this.allIngredients = data;
        this.wraps = this.allIngredients.filter((w: { type: string; }) => w.type === 'WRAP');
        this.proteins = this.allIngredients.filter((p: { type: string; }) => p.type === 'PROTEIN');
        this.veggies = this.allIngredients.filter((v: { type: string; }) => v.type === 'VEGGIES');
        this.cheeses = this.allIngredients.filter((c: { type: string; }) => c.type === 'CHEESE');
        this.sauces = this.allIngredients.filter((s: { type: string; }) => s.type === 'SAUCE');
      });
  }

  updateIngredients(ingredient: any, event: any) {
    if (event.target.checked) {
      this.model.ingredients.push(ingredient);
    } else {
      this.model.ingredients.splice(this.model.ingredients.findIndex(i => i === ingredient), 1);
    }
  }

  onSubmit() {
    this.httpClient.post(
      'http://localhost:8080/design',
      this.model, {
        headers: new HttpHeaders().set('Content-type', 'application/json'),
      }).subscribe(taco => this.cart.addToCart(taco));

    this.router.navigate(['/cart']);
  }

}
