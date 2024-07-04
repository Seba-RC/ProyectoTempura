// get-carro.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCarroService {

  private baseUrl = 'http://127.0.0.1:8000/getcarro/';

  constructor(private http: HttpClient) { }

  getCarro(carro: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${carro}/`);
  }
}

