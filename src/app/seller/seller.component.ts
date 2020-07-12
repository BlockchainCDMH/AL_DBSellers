import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { commerces } from 'src/shared/commerces';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  @Input() commerces: commerces[];
  @Output() newCommerceOutput = new EventEmitter<commerces>();
  selected=-1;
  constructor() { }

  ngOnInit(): void {
  }

  cliked(value: commerces) {
    this.newCommerceOutput.emit(value);
    this.selected=value.id;
  }

  selection(id:number):boolean{
    return false;
  }

}
