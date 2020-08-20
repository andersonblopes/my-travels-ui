import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({ providedIn: 'root' })
export class TravelService {

  apiUrl = 'http://localhost:8080/travel';

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private HttpClient : HttpClient
  ) { }


public getTravels(): Observable<ResponsePageable>{
  return this.HttpClient.get<ResponsePageable>(this.apiUrl);
}

}
