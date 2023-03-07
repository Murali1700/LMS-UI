import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import {User} from './models/User'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly LoginURL = 'http://127.0.0.1:8000/user/'

  constructor(private http: HttpClient) { }

  public validateUser():Observable<Array<User>> {
    return this.http.get<Array<User>>(this.LoginURL);
  }

}
