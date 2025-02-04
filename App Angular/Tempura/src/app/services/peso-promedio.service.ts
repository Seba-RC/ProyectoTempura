// peso-promedio.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesoPromedioService {

  private baseUrl = 'http://127.0.0.1:8000/pesopromedio/';

  constructor(private http: HttpClient) { }

  getPesoPromedio(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}

