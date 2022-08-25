import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  @Output() termEmitter = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term: string){
    console.log(term);
    this.termEmitter.emit(term);
  }


}
