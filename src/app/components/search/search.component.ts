import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchProduct: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const query = {
      title: this.title
    };

    this.searchProduct.emit(query);
  }

}
