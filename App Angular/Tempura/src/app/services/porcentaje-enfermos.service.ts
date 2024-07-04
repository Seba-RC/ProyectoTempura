// porcentaje-enfermos.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorcentajeEnfermosService {

  private baseUrl = 'http://127.0.0.1:8000/porcentajeenfermos/';

  constructor(private http: HttpClient) { }

  getPorcentajeEnfermos(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}

