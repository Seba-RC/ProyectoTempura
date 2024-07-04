// app.component.ts

import { Component } from '@angular/core';
import { VagonService } from './vagon/vagon.service'; // Ajuste de la ruta de importación

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private vagonService: VagonService) {}

  
}

