import { Component, OnInit,Input } from '@angular/core';
import { commerces } from 'src/shared/commerces';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  @Input() commerces: commerces;
  constructor() { }

  ngOnInit(): void {
  }

}
