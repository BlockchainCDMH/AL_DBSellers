import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import {CommercesService} from '../services/commerces.service';
import { commerces } from 'src/shared/commerces';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})

export class DashBoardComponent implements OnInit {
  commerces: commerces[]
  map: Mapboxgl.map;
  commerce: commerces;
  constructor(private commercesservices:CommercesService) { }

  ngOnInit(): void {

    Mapboxgl.accessToken = environment.mapboxkey;
    var map = new Mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.069412,4.61496], // starting position
      zoom: 16 // starting zoom
      });

      this.getCommerces();
  }

  
  getCommerces() {
    return this.commercesservices.getcommerces().subscribe(response => {
      if (response !== null) {
        this.commerces = response;
      }
    })
  }

  newcommerce(id){
    this.commerce=id;
  }

}
