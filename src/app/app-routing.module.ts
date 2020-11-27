import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './components/libros/delete/delete.component';
import { LibrosComponent } from './components/libros/libros.component';
import { EditComponent } from './components/users/edit/edit.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:"user", component:UsersComponent },
  {path:"usuarios/edit/:id", component:EditComponent },
  {path:"libros", component:LibrosComponent },
  {path:"libros/delete/:id", component:DeleteComponent },
  {path:'**',pathMatch:'full',redirectTo:'user'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
