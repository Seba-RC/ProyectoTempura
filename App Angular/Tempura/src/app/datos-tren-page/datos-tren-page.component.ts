// datos-tren.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'; // Asegúrate de importar tu servicio de datos aquí

@Component({
  selector: 'app-datos-tren',
  templateUrl: './datos-tren.component.html',
  styleUrls: ['./datos-tren.component.css']
})
export class DatosTrenComponent implements OnInit {

  totalPersonasDia: any;
  totalPersonasHora: any;
  temperaturaCarroDia: any;
  temperaturaCarroHora: any;
  temperaturaPromedioHora: any;
  temperaturaPromedioDia: any;
  carroInfo: any;
  pesoPromedio: any;
  temperaturaMinimaDia: any;
  temperaturaMinimaHora: any;
  porcentajeSanos: any;
  porcentajeEnfermos: any;
  temperaturaMaximaDia: any;
  temperaturaMaximaHora: any;
  promedioPersonas: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Aquí puedes cargar datos por defecto al iniciar el componente si lo deseas
  }

  getTotalPersonasDia(): void {
    this.dataService.getTotalPersonasDia()
      .subscribe(
        response => {
          this.totalPersonasDia = response['Total de personas este dia'];
        },
        error => {
          console.error('Error al obtener total personas día:', error);
        }
      );
  }

  getTotalPersonasHora(): void {
    this.dataService.getTotalPersonasHora()
      .subscribe(
        response => {
          this.totalPersonasHora = response['Total de personas a esta hora'];
        },
        error => {
          console.error('Error al obtener total personas hora:', error);
        }
      );
  }

  getTemperaturaCarroDia(): void {
    this.dataService.getTemperaturaCarroDia()
      .subscribe(
        response => {
          this.temperaturaCarroDia = response['Temperatura del carro este dia'];
        },
        error => {
          console.error('Error al obtener temperatura carro día:', error);
        }
      );
  }

  getTemperaturaCarroHora(): void {
    this.dataService.getTemperaturaCarroHora()
      .subscribe(
        response => {
          this.temperaturaCarroHora = response['Temperatura del carro a esta hora'];
        },
        error => {
          console.error('Error al obtener temperatura carro hora:', error);
        }
      );
  }

  getTemperaturaTotalHora(): void {
    this.dataService.getTemperaturaTotalHora()
      .subscribe(
        response => {
          this.temperaturaPromedioHora = response['Temperatura promedio a lo largo del tren a esta hora'];
        },
        error => {
          console.error('Error al obtener temperatura promedio tren hora:', error);
        }
      );
  }

  getTemperaturaTotalDia(): void {
    this.dataService.getTemperaturaTotalDia()
      .subscribe(
        response => {
          this.temperaturaPromedioDia = response['Temperatura promedio a lo largo del tren este dia'];
        },
        error => {
          console.error('Error al obtener temperatura promedio tren día:', error);
        }
      );
  }

  getCarroInfo(): void {
    this.dataService.getCarroInfo()
      .subscribe(
        response => {
          this.carroInfo = response;
        },
        error => {
          console.error('Error al obtener información del carro:', error);
        }
      );
  }

  getPesoPromedio(): void {
    this.dataService.getPesoPromedio()
      .subscribe(
        response => {
          this.pesoPromedio = response['Peso promedio a lo largo del tren'];
        },
        error => {
          console.error('Error al obtener peso promedio:', error);
        }
      );
  }

  getTemperaturaMinimaDia(): void {
    this.dataService.getTemperaturaMinimaDia()
      .subscribe(
        response => {
          this.temperaturaMinimaDia = response['Temperatura minima a lo largo del tren este dia'];
        },
        error => {
          console.error('Error al obtener temperatura mínima tren día:', error);
        }
      );
  }

  getTemperaturaMinimaHora(): void {
    this.dataService.getTemperaturaMinimaHora()
      .subscribe(
        response => {
          this.temperaturaMinimaHora = response['Temperatura minima a lo largo del tren esta hora'];
        },
        error => {
          console.error('Error al obtener temperatura mínima tren hora:', error);
        }
      );
  }

  getPorcentajeSanos(): void {
    this.dataService.getPorcentajeSanos()
      .subscribe(
        response => {
          this.porcentajeSanos = response['Porcentaje de sanos'];
        },
        error => {
          console.error('Error al obtener porcentaje de sanos:', error);
        }
      );
  }

  getPorcentajeEnfermos(): void {
    this.dataService.getPorcentajeEnfermos()
      .subscribe(
        response => {
          this.porcentajeEnfermos = response['Porcentaje de enfermos'];
        },
        error => {
          console.error('Error al obtener porcentaje de enfermos:', error);
        }
      );
  }

  getTemperaturaMaximaDia(): void {
    this.dataService.getTemperaturaMaximaDia()
      .subscribe(
        response => {
          this.temperaturaMaximaDia = response['Temperatura maxima a lo largo del tren este dia'];
        },
        error => {
          console.error('Error al obtener temperatura máxima tren día:', error);
        }
      );
  }

  getTemperaturaMaximaHora(): void {
    this.dataService.getTemperaturaMaximaHora()
      .subscribe(
        response => {
          this.temperaturaMaximaHora = response['Temperatura minima a lo largo del tren esta hora'];
        },
        error => {
          console.error('Error al obtener temperatura máxima tren hora:', error);
        }
      );
  }

  getPromedioPersonas(): void {
    this.dataService.getPromedioPersonas()
      .subscribe(
        response => {
          this.promedioPersonas = response['Promedio de personas en el tren'];
        },
        error => {
          console.error('Error al obtener promedio personas tren:', error);
        }
      );
  }

}

