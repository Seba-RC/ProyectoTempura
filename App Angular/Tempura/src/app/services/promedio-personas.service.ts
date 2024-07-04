// promedio-personas.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromedioPersonasService {

  private baseUrl = 'http://127.0.0.1:8000/promediopersonas/';

  constructor(private http: HttpClient) { }

  getPromedioPersonas(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}

