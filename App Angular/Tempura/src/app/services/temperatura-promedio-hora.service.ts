// temperatura-promedio-hora.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaPromedioHoraService {

  private baseUrl = 'http://127.0.0.1:8000/temperaturatotalhora/';

  constructor(private http: HttpClient) { }

  getTemperaturaPromedioHora(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}

