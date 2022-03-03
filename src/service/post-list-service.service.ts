import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { IPost } from 'src/app/Shared Classes and types/ipost';
import { Iproduct } from 'src/app/Shared Classes and types/SharedClasses';

@Injectable({
  providedIn: 'root'
})
export class PostListServiceService {

  constructor(private http:HttpClient) { }
  private URL:string="assets/Data/posts.json"
  returnRroduct():Observable<IPost[]> {

    return  this.http.get<IPost[]>(this.URL).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
}}
