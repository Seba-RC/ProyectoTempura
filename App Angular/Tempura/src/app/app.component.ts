import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { VagonComponent } from './vagon/vagon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(VagonComponent, { static: false }) vagonComponent: VagonComponent | undefined;

  ngAfterViewInit(): void {
    if (this.vagonComponent) {
      // Call methods of VagonComponent here
      this.vagonComponent.generarTren();
      this.vagonComponent.eliminarCarros();
      this.vagonComponent.getAllCarsData();
    }
  }
}

