import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;
 
   //** //ye default value hamesha selected rhega jab tk user change na kre
  selectedFilterRadioButton: string = 'all';

  @Output()
  //ab kisi user ne radio button pe click kiya to ye event emit hoga
  //ye event ko parent component me listen krna hai
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  //ab ye event string data return karega ie 'all' 'true'(inStock) 'false'(outOfStock) 

  onselectedFilterRadioButtonChanged() {
    //ye function call hoga child class mein jaahan change event occur ho raha hai .
    //wo change event ki hisaab se value emitted to parent change hogi
    //ab agar user kisi radio button ko click kia toh uska value ie 'all' 'true' 'false' hume emit krna hai
    // ye value selectedFilterRadioButton me stored hai wo upar //** kis hai udhr 
    //chahiye toh console log karke dekh skte ho
    //console.log(this.selectedFilterRadioButton);
    //ab hume ye value emit krni hai toh hum emit krdenge so that child se parent component ko ye value mil jaye
    //but ye value emit hone ke liye eventEmmiter ko @Output decorator dena padega warna emit nahi hoga parent ko
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
    //ab parent component me jake hum is event ko listen krenge aur uske hisab se product list ko filter krenge
    // ab jab ye event emit hoga toh wo "this.selectedFilterRadioButton" value emit karega
  // ye value hum $event ke through parent component me receive krenge

  }

}

