import { Component ,ElementRef,EventEmitter, Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  //create an event emitter to emit the search text to the parent component
//optional 2nd argument of @viewchild
//1. read : used to read different tokens from queried elements
//2. static : determine when the query should be resolved
// true is when the view is initialized (before the first change detection ) for the first time (default is true)
//false if you want it to be resolved after  every change detection cycle
  @ViewChild('searchInput') searchInputEl : ElementRef; 
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  updateSearchText(){
      this.searchText = this.searchInputEl.nativeElement.value;
      this.searchTextChanged.emit(this.searchText);
    
  }
    onSearchTextChanged(){
  
}

}