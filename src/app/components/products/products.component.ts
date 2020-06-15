import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';
import {DomSanitizer} from '@angular/platform-browser';
import {ProductService} from '../../services/product/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() searchedProducts: Product[];

  products: Product[];

  validResults: boolean;

  constructor(private productService: ProductService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.validResults = true;
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.convertImages();
    });
  }

  convertImages() {
    this.products.forEach((product) => {
      const objectURL = 'data:image/png;base64,' + product.thumbnail;
      product.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }

  updateProducts(newProducts: Product[]) {
    this.products = newProducts;
    this.convertImages();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
