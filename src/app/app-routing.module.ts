import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { StarmapAdminComponent } from './starmap/starmap-admin/starmap-admin.component';
import { StarMapComponent } from './starmap/starmap/starmap.component';

const routes: Routes = [
  { path: 'starmap', component: StarMapComponent },
  { path: 'starmap-admin', component: StarmapAdminComponent },
  { path: '', pathMatch: 'full', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }