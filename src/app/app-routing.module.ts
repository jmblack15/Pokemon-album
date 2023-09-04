import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { GetSheetsComponent } from './pages/get-sheets/get-sheets.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  { path: 'album', component: AlbumComponent },
  { path: 'sheets', component: GetSheetsComponent },
  { path: '', component: InfoComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
