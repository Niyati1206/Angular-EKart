import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // addToCart: number = 0 
  // name ="Niyati"
  // product = {
  //     image: 'assets/iphone.png',
  //     name : 'iPhone',
  //     price :  1400 ,
  //     colour :  'Matte Black',
  //     discount : 8.5,
  //     stock: 10
  // }
  
  // getDiscountedPrice(){
  //   return this.product.price - (this.product.price * this.product.discount / 100);
  // }
  // onNameChange(event : any){
  //   this.name = event.target.value;
 
  // }
  // alerting(){
  //         alert("Hii " + this.name);
  // }
  // decrement(){
  //   if(this.addToCart>0){
  //      this.addToCart--;
  //   }
   
  // }
  // increment(){
  //   if(this.addToCart < this.product.stock){
  //         this.addToCart++;
  //   }

  // }

  searchText: string ='';

  @ViewChild(ProductListComponent) productListComponent:ProductListComponent;
  setSearchText(value: string){
    this.searchText = value;
  }
}
