import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { commerces } from '../../shared/commerces';
import { layer } from '../../shared/layer';
import { graph } from '../../shared/graph';
@Injectable({
  providedIn: 'root'
})
export class CommercesService {


  private commercesUrl = 'https://alw-lab.herokuapp.com';
  constructor(private http: HttpClient) { }
  public myLayer = null;
  prueba= false;

  getCommercesLayer() : Observable<layer[]>  {
    return this.http.get<layer[]>(this.commercesUrl + "/commerces/layer");
  }

  getvariable(variable) {
    this.prueba= true;
    this.myLayer = variable
  }
  getgraph() : Observable<graph[]> {
    return this.http.get<graph[]>(this.commercesUrl + "/commerces/graph");
  }
  getcommerces(): Observable<commerces[]> {
    return this.http.get<commerces[]>(this.commercesUrl + "/commerces");

  }
}
