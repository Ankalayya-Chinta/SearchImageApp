import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchImageComponent } from './search-image/search-image.component';
import { SavedImagesComponent } from './saved-images/saved-images.component';

const routes: Routes = [
  {path:'home', component:SearchImageComponent},
  {path:'favImages',component:SavedImagesComponent},
  {path: "",redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
