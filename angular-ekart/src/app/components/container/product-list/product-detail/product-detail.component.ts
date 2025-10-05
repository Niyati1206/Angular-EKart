import { Component, Input } from '@angular/core';
import { Product } from 'src/app/components/Models/Product';
import { ProductListComponent } from '../product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
product : Product;
getDiscountPercent(product: any): number {
  if (!product.discountPrice || product.discountPrice === 0) return 0;
  return 100 - (product.discountPrice / product.price * 100);
}
@Input() productListComp : ProductListComponent = undefined; //initially no product is selected

ngOnInit(){
  this.product = this.productListComp.selectedProduct;
}
}
