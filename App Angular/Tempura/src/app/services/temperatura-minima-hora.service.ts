// temperatura-minima-hora.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaMinimaHoraService {

  private baseUrl = 'http://127.0.0.1:8000/tempminimatrenhora/';

  constructor(private http: HttpClient) { }

  getTemperaturaMinimaHora(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}

