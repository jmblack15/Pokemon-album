import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: 'album', component: AlbumComponent },
  { path: 'sheet', component: SheetComponent },
  { path: '', component: InfoComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
