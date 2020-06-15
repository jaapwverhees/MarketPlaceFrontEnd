import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product/product.service';
import {ProductsComponent} from '../products/products.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() products = new EventEmitter<Product[]>();

  query: string;

  searchedProduct: Product[];


  constructor(private productService: ProductService, private productsComponent: ProductsComponent) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productService.getProductsByName(this.query).subscribe(products => {
      this.searchedProduct = products;
      this.productsComponent.updateProducts(this.searchedProduct);
    });
    this.query = null;
  }

}
