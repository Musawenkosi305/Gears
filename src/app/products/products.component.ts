import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html', 
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  category: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
