import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { AlbumComponent } from './components/album/album.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    AlbumComponent,
    PageNotFoundComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
