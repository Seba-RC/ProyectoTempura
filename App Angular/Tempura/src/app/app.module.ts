import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VagonComponent } from './vagon/vagon.component';
import { VagonService } from './vagon/vagon.service';
import { DatosTrenComponent } from './datos-tren/datos-tren.component';

@NgModule({
  declarations: [
    AppComponent,
    VagonComponent,
    DatosTrenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header'
    })
  ],
  providers: [VagonService],
  bootstrap: [AppComponent]
})
export class AppModule { }


