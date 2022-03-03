import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUsers } from './app/Shared Classes and types/iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }
  private URL : string = 'assets/Data/usersData.json'


  returnUsers():Observable<IUsers[]> {

    return  this.http.get<IUsers[]>(this.URL).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }
}
