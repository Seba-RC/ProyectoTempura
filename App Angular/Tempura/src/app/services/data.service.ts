
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getTotalPersonasDia() {
    return this.http.get<any>(this.baseUrl + 'totalpersonasdia/');
  }

  getTotalPersonasHora() {
    return this.http.get<any>(this.baseUrl + 'totalpersonashora/');
  }

  getTemperaturaCarroDia() {
    return this.http.get<any>(this.baseUrl + 'temperaturacarrodia/1/'); // Reemplaza 1 por el número de carro que necesites
  }

  getTemperaturaCarroHora() {
    return this.http.get<any>(this.baseUrl + 'temperaturacarrohora/1/'); // Reemplaza 1 por el número de carro que necesites
  }

  getTemperaturaTotalHora() {
    return this.http.get<any>(this.baseUrl + 'temperaturatotalhora/');
  }

  getTemperaturaTotalDia() {
    return this.http.get<any>(this.baseUrl + 'temperaturatotaldia/');
  }

  getCarroInfo() {
    return this.http.get<any>(this.baseUrl + 'getcarro/1/'); // Reemplaza 1 por el número de carro que necesites
  }

  getPesoPromedio() {
    return this.http.get<any>(this.baseUrl + 'pesopromedio/');
  }

  getTemperaturaMinimaDia() {
    return this.http.get<any>(this.baseUrl + 'tempminimatrendia/');
  }

  getTemperaturaMinimaHora() {
    return this.http.get<any>(this.baseUrl + 'tempminimatrenhora/');
  }

  getPorcentajeSanos() {
    return this.http.get<any>(this.baseUrl + 'porcentajesanos/');
  }

  getPorcentajeEnfermos() {
    return this.http.get<any>(this.baseUrl + 'porcentajeenfermos/');
  }

  getTemperaturaMaximaDia() {
    return this.http.get<any>(this.baseUrl + 'tempmaximatrendia/');
  }

  getTemperaturaMaximaHora() {
    return this.http.get<any>(this.baseUrl + 'tempmaximatrenhora/');
  }

  getPromedioPersonas() {
    return this.http.get<any>(this.baseUrl + 'promediopersonas/');
  }

}
