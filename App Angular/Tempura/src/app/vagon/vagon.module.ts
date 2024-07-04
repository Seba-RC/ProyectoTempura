import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VagonComponent } from './vagon.component';
import { VagonService } from './vagon.service';

@NgModule({
  declarations: [
    VagonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    VagonService // Asegúrate de incluir tu servicio aquí si lo necesitas
  ]
})
export class VagonModule { }

