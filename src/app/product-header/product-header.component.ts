import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit{
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'Down';
  itemsShowCount = 12;

  constructor() { } 

  ngOnInit(): void {
    
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count : number): void {
    this.itemsShowCount = count;
  } 

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
