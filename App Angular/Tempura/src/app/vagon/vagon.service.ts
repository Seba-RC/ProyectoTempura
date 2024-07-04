import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagonService {
  
  private djangoUrl = 'http://127.0.0.1:8000/'; // Ajusta la URL de acuerdo a tu configuración

  constructor(private http: HttpClient) { }

  generarTren(): Observable<any> {
    return this.http.get<any>(`${this.djangoUrl}generate-cars/`);
  }

  deleteCars(): Observable<any> {
    return this.http.get<any>(`${this.djangoUrl}delete-cars/`);
  }

  getAllCars(): Observable<any> {
    return this.http.get<any>(`${this.djangoUrl}get_all/`);
  }

}

