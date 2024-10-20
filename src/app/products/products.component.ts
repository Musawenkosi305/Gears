import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: { [id:number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html', 
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  

  constructor() { }

  ngOnInit(): void {

  }

  onColumnsCountChange(colsNum:number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
