import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Iproduct } from 'src/app/Shared Classes and types/SharedClasses';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {

  constructor(private http:HttpClient) { }
  private URL:string="assets/Data/product.json"
  returnRroduct():Observable<Iproduct[]> {

    return  this.http.get<Iproduct[]>(this.URL).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))

}}
