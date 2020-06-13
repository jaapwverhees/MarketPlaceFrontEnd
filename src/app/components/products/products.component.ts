import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/Product';
import {DomSanitizer} from '@angular/platform-browser';
import {ProductService} from '../../services/product/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
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
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
