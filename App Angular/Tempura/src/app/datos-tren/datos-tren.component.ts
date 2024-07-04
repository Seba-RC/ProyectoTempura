import { Component } from '@angular/core';
import { TotalPersonasDiaService } from '../services/total-personas-dia.service';
import { TotalPersonasHoraService } from '../services/total-personas-hora.service';
import { TemperaturaCarroDiaService } from '../services/temperatura-carro-dia.service';
import { TemperaturaCarroHoraService } from '../services/temperatura-carro-hora.service';
import { TemperaturaPromedioHoraService } from '../services/temperatura-promedio-hora.service';
import { TemperaturaPromedioDiaService } from '../services/temperatura-promedio-dia.service';
import { GetCarroService } from '../services/get-carro.service';
import { PesoPromedioService } from '../services/peso-promedio.service';
import { TemperaturaMinimaDiaService } from '../services/temperatura-minima-dia.service';
import { TemperaturaMinimaHoraService } from '../services/temperatura-minima-hora.service';
import { PorcentajeSanosService } from '../services/porcentaje-sanos.service';
import { PorcentajeEnfermosService } from '../services/porcentaje-enfermos.service';
import { TemperaturaMaximaDiaService } from '../services/temperatura-maxima-dia.service';
import { TemperaturaMaximaHoraService } from '../services/temperatura-maxima-hora.service';
import { PromedioPersonasService } from '../services/promedio-personas.service';

@Component({
  selector: 'app-datos-tren',
  templateUrl: './datos-tren.component.html',
  styleUrls: ['./datos-tren.component.css']
})
export class DatosTrenComponent {

  // Variables para almacenar los datos obtenidos
  totalPersonasDia: any;
  totalPersonasHora: any;
  temperaturaCarroDia: number | undefined;
  temperaturaCarroHora: number | undefined;
  temperaturaPromedioHora: number | undefined;
  temperaturaPromedioDia: any;
  carroInfo: any; // Asumiendo que carroInfo es un objeto complejo
  pesoPromedio: number | undefined;
  temperaturaMinimaDia: any;
  temperaturaMinimaHora: any;
  porcentajeSanos: any;
  porcentajeEnfermos: any;
  temperaturaMaximaDia: any;
  temperaturaMaximaHora: any;
  promedioPersonas: any;

  // Variable para mantener el estado del dato mostrado
  datoMostrado: string | null = null;

  constructor(
    private totalPersonasDiaService: TotalPersonasDiaService,
    private totalPersonasHoraService: TotalPersonasHoraService,
    private temperaturaCarroDiaService: TemperaturaCarroDiaService,
    private temperaturaCarroHoraService: TemperaturaCarroHoraService,
    private temperaturaPromedioHoraService: TemperaturaPromedioHoraService,
    private temperaturaPromedioDiaService: TemperaturaPromedioDiaService,
    private getCarroService: GetCarroService,
    private pesoPromedioService: PesoPromedioService,
    private temperaturaMinimaDiaService: TemperaturaMinimaDiaService,
    private temperaturaMinimaHoraService: TemperaturaMinimaHoraService,
    private porcentajeSanosService: PorcentajeSanosService,
    private porcentajeEnfermosService: PorcentajeEnfermosService,
    private temperaturaMaximaDiaService: TemperaturaMaximaDiaService,
    private temperaturaMaximaHoraService: TemperaturaMaximaHoraService,
    private promedioPersonasService: PromedioPersonasService
  ) { }

  // Método para obtener y mostrar los datos del total de personas este día
  getTotalPersonasDia(): void {
    this.totalPersonasDiaService.getTotalPersonasDia()
      .subscribe(
        (response: any) => {
         this.totalPersonasDia = response['Total de personas este dia'];
         this.datoMostrado = 'totalPersonasDia'; // Opcional: control para indicar qué dato se muestra
        },
       error => {
          console.error('Error al obtener total personas este día:', error);
       }
      );
  }


  // Método para obtener y mostrar los datos del total de personas a esta hora
  getTotalPersonasHora(): void {
    this.totalPersonasHoraService.getTotalPersonasHora()
      .subscribe(
        (response: any) => {
          this.totalPersonasHora = response['Total de personas a esta hora'];
          this.datoMostrado = 'totalPersonasHora';
        },
        error => {
          console.error('Error al obtener total personas hora:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos de la temperatura del carro este día
  getTemperaturaCarroDia(carro: number): void {
    this.temperaturaCarroDiaService.getTemperaturaCarroDia(carro)
      .subscribe(
        (response: any) => {
          this.temperaturaCarroDia = response['Temperatura del carro este dia'];
          this.datoMostrado = 'temperaturaCarroDia';
        },
        error => {
          console.error('Error al obtener temperatura carro día:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos de la temperatura del carro a esta hora
  getTemperaturaCarroHora(carro: number): void {
    this.temperaturaCarroHoraService.getTemperaturaCarroHora(carro)
      .subscribe(
        (response: any) => {
          this.temperaturaCarroHora = response['Temperatura del carro a esta hora'];
          this.datoMostrado = 'temperaturaCarroHora';
        },
        error => {
          console.error('Error al obtener temperatura carro hora:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos de la temperatura promedio a lo largo del tren a esta hora
  getTemperaturaPromedioHora(): void {
    this.temperaturaPromedioHoraService.getTemperaturaPromedioHora()
      .subscribe(
        (response: any) => {
          this.temperaturaPromedioHora = response['Temperatura promedio a lo largo del tren a esta hora'];
          this.datoMostrado = 'temperaturaPromedioHora';
        },
        error => {
          console.error('Error al obtener temperatura promedio hora:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos de la temperatura promedio a lo largo del tren este día
  getTemperaturaPromedioDia(): void {
    this.temperaturaPromedioDiaService.getTemperaturaPromedioDia()
      .subscribe(
        (response: any) => {
          this.temperaturaPromedioDia = response['Temperatura promedio a lo largo del tren este día'];
          this.datoMostrado = 'temperaturaPromedioDia';
        },
        error => {
          console.error('Error al obtener temperatura promedio día:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos de la información del carro específico
  getCarro(carro: number): void {
    this.getCarroService.getCarro(carro)
      .subscribe(
        (response: any) => {
          this.carroInfo = response;
          this.datoMostrado = 'carroInfo';
        },
        error => {
          console.error('Error al obtener información del carro:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos del peso promedio a lo largo del tren
  getPesoPromedio(): void {
    this.pesoPromedioService.getPesoPromedio()
      .subscribe(
        (response: any) => {
          this.pesoPromedio = response['Peso promedio a lo largo del tren'];
          this.datoMostrado = 'pesoPromedio';
        },
        error => {
          console.error('Error al obtener peso promedio:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos de la temperatura mínima a lo largo del tren este día
  getTemperaturaMinimaDia(): void {
    this.temperaturaMinimaDiaService.getTemperaturaMinimaDia()
      .subscribe(
        (response: any) => {
          this.temperaturaMinimaDia = response['Temperatura mínima a lo largo del tren este día'];
          this.datoMostrado = 'temperaturaMinimaDia';
        },
        error => {
          console.error('Error al obtener temperatura mínima día:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos de la temperatura mínima a lo largo del tren esta hora
  getTemperaturaMinimaHora(): void {
    this.temperaturaMinimaHoraService.getTemperaturaMinimaHora()
      .subscribe(
        (response: any) => {
          this.temperaturaMinimaHora = response['Temperatura mínima a lo largo del tren esta hora'];
          this.datoMostrado = 'temperaturaMinimaHora';
        },
        error => {
          console.error('Error al obtener temperatura mínima hora:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos del porcentaje de personas sanas
  getPorcentajeSanos(): void {
    this.porcentajeSanosService.getPorcentajeSanos()
      .subscribe(
        (response: any) => {
          this.porcentajeSanos = response['Porcentaje de personas sanas'];
          this.datoMostrado = 'porcentajeSanos';
        },
        error => {
          console.error('Error al obtener porcentaje de personas sanas:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos del porcentaje de personas enfermas
  getPorcentajeEnfermos(): void {
    this.porcentajeEnfermosService.getPorcentajeEnfermos()
      .subscribe(
        (response: any) => {
          this.porcentajeEnfermos = response['Porcentaje de personas enfermas'];
          this.datoMostrado = 'porcentajeEnfermos';
        },
        error => {
          console.error('Error al obtener porcentaje de personas enfermas:', error);
        }
      ); 
  }

  // Método para obtener y mostrar los datos de la temperatura máxima a lo largo del tren este día
  getTemperaturaMaximaDia(): void {
    this.temperaturaMaximaDiaService.getTemperaturaMaximaDia()
      .subscribe(
        (response: any) => {
          this.temperaturaMaximaDia = response['Temperatura máxima a lo largo del tren este día'];
          this.datoMostrado = 'temperaturaMaximaDia';
        },
        error => {
          console.error('Error al obtener temperatura máxima día:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos de la temperatura máxima a lo largo del tren esta hora
  getTemperaturaMaximaHora(): void {
    this.temperaturaMaximaHoraService.getTemperaturaMaximaHora()
      .subscribe(
        (response: any) => {
          this.temperaturaMaximaHora = response['Temperatura máxima a lo largo del tren esta hora'];
          this.datoMostrado = 'temperaturaMaximaHora';
        },
        error => {
          console.error('Error al obtener temperatura máxima hora:', error);
        }
      );
  }

  // Método para obtener y mostrar los datos del promedio de personas a lo largo del tren
  getPromedioPersonas(): void {
    this.promedioPersonasService.getPromedioPersonas()
      .subscribe(
        (response: any) => {
          this.promedioPersonas = response['Promedio de personas en el tren'];
          this.datoMostrado = 'promedioPersonas';
          console.log('Promedio de personas:', this.promedioPersonas); // Verifica el valor aquí
          console.log('Dato mostrado:', this.datoMostrado); // Verifica el valor aquí
        },
        error => {
          console.error('Error al obtener promedio de personas:', error);
        }
      );
  }
}

