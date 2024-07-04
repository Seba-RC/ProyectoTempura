// temperatura-promedio-dia.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaPromedioDiaService {

  private baseUrl = 'http://127.0.0.1:8000/temperaturatotaldia/';

  constructor(private http: HttpClient) { }

  getTemperaturaPromedioDia(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}

