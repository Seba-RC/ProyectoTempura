// porcentaje-sanos.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorcentajeSanosService {

  private baseUrl = 'http://127.0.0.1:8000/porcentajesanos/';

  constructor(private http: HttpClient) { }

  getPorcentajeSanos(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}

