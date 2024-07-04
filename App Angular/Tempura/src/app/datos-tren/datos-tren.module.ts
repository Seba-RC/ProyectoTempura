import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DatosTrenComponent } from './datos-tren.component';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    DatosTrenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService // Asegúrate de incluir tu servicio aquí si lo necesitas
  ]
})
export class DatosTrenModule { }

