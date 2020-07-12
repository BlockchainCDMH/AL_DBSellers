import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import {CommercesService} from '../services/commerces.service';
import { commerces } from 'src/shared/commerces';
import { graph } from 'src/shared/graph';
import { layer } from 'src/shared/layer';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})

export class DashBoardComponent implements OnInit {
  commerces: commerces[]
  layer: layer[];
  graph: graph[];
  
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
      this.getlayer();
      this.getgraph();
  }

  
  getCommerces() {
    return this.commercesservices.getcommerces().subscribe(response => {
      if (response !== null) {
        this.commerces = response;
      }
    })
  }
  getlayer() {
    return this.commercesservices.getCommercesLayer().subscribe(response => {
      if (response !== null) {
        this.layer = response;
      }
    })
  }
  getgraph() {
    return this.commercesservices.getgraph().subscribe(response => {
      if (response !== null) {
        this.graph = response;
      }
    })
  }

  drawCommerce(id){
    this.commerce=id;
    console.log(this.layer)
  /*   var marker = new Mapboxgl.Marker()
    .setLngLat([12.550343, 55.665957])
    .addTo(this.map); */
  }

}
