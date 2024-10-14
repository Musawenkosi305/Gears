import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>()

  categories = ['apes', 'tires'];

  constructor() { }

  ngOnInit(): void {
    
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
