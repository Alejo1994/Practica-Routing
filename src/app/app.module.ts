import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { EditComponent } from './components/users/edit/edit.component';
import { UsersService } from './services/users.service';
import { LibrosService } from './services/libros.service';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'

import { environment } from 'src/environments/environment';
import { LibrosComponent } from './components/libros/libros.component';
import { DeleteComponent } from './components/libros/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditComponent,
    LibrosComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    UsersService,
    LibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
