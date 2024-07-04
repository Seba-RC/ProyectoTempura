// temperatura-maxima-dia.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaMaximaDiaService {

  private baseUrl = 'http://127.0.0.1:8000/tempmaximatrendia/';

  constructor(private http: HttpClient) { }

  getTemperaturaMaximaDia(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}

