import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { IUsers } from 'src/app/Shared Classes and types/iusers';

@Injectable({
  providedIn: 'root'
})
export class UserListServiceService {

  constructor(private http:HttpClient) { }
  private URL:string="assets/Data/usersData.json"
  returnRroduct():Observable<IUsers[]> {

    return  this.http.get<IUsers[]>(this.URL)
  }
}
