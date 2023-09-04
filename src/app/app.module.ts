import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { AlbumComponent } from './pages/album/album.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InfoComponent } from './pages/info/info.component';
import { GetSheetsComponent } from './pages/get-sheets/get-sheets.component';
import { CardEnvelopeComponent } from './components/card-envelope/card-envelope.component';


@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    AlbumComponent,
    PageNotFoundComponent,
    InfoComponent,
    GetSheetsComponent,
    CardEnvelopeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
