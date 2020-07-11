import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { commerces } from '../../shared/commerces';
@Injectable({
  providedIn: 'root'
})
export class CommercesService {


  private commercesUrl = 'https://alw-lab.herokuapp.com';
  constructor(private http: HttpClient) { }
  public myLayer = null;
  prueba= false;

  /*
  getcommerceslayer() : HttpResponse<commerces> {
    this.http.get(this.commercesUrl + "/commerces/layer")
    .subscribe(myResponse=>this.getvariable(myResponse)); 
  }
  */
  getCommercesLayer(){
    this.http.get(this.commercesUrl + "/commerces/layer");
  }

  getvariable(variable) {
    this.prueba= true;
    this.myLayer = variable
  }
  getgraph() {
    return this.http.get(this.commercesUrl + "/commerces/graph");


  }
  getcommerces(): Observable<commerces[]> {
    return this.http.get<commerces[]>(this.commercesUrl + "/commerces");

  }
}
