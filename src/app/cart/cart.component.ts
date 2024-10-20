import { Component, OnInit } from '@angular/core';
import {Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [{
    product: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzu8Bk22kfKAQA56mpA6JOdXXrutjKVRzDA&s',
    name: '20" Handles',
    price: 15000,
    quantity: 1,
    id: 1,

  }] };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor() { }

ngOnInit(): void {
    this.dataSource = this.cart.items;
}

}
