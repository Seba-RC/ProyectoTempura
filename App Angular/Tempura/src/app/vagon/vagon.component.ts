// vagon.component.ts
import { Component, OnInit } from '@angular/core';
import { VagonService } from './vagon.service';

@Component({
  selector: 'app-vagon',
  templateUrl: './vagon.component.html',
  styleUrls: ['./vagon.component.css']
})
export class VagonComponent implements OnInit {

  vagones: any[] = [];
  carroId: number = 0; // Inicialización básica, ajusta según tus necesidades

  constructor(private vagonService: VagonService) { }

  ngOnInit(): void {
    // Puedes cargar los datos automáticamente al iniciar el componente
    // this.getAllCarsData();
  }

  generarTren(): void {
    this.vagonService.generarTren().subscribe(
      (data) => {
        console.log('Tren generado exitosamente', data);
        // Puedes agregar lógica adicional aquí si es necesario
      },
      (error) => {
        console.error('Error al generar el tren', error);
      }
    );
  }

  eliminarCarros(): void {
    this.vagonService.deleteCars().subscribe(
      (data) => {
        console.log('Todos los carros eliminados exitosamente', data);
        // Puedes agregar lógica adicional aquí si es necesario
      },
      (error) => {
        console.error('Error al eliminar los carros', error);
      }
    );
  }

  getAllCarsData(): void {
    this.vagonService.getAllCars().subscribe(
      (data) => {
        this.vagones = data.cars; // Asegúrate de que 'cars' coincida con la clave devuelta en JsonResponse de Django
        console.log('Datos de carros obtenidos exitosamente', this.vagones);
      },
      (error) => {
        console.error('Error al obtener los datos de los carros', error);
      }
    );
  }
}

