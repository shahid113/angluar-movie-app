import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostdetailsComponent } from './shared/postdetails/postdetails.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'movies/:id', component:PostdetailsComponent},
  {path:'tvshows/:id', component:PostdetailsComponent},
  
  {path:'movies', loadChildren:()=>import('./content/content.module')
  .then(mod=>mod.ContentModule)},

  {path:'tvshows', loadChildren:()=>import('./content/content.module')
   .then(mod=>mod.ContentModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
