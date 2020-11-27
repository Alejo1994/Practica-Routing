import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor( private db:AngularFirestore ) { }

  async getAllLibros(){
   
    return this.db.collection("Libros").snapshotChanges()
    .pipe(map(document => {
        return document.map(doc => {
          return {id: doc.payload.doc.id, data:doc.payload.doc.data()}
        })
    }));
  }

  async updateLibro(docId:string ,libro: any){
    this.db.doc(`Libros/${docId}`).update({
      Titulo:libro.titulo,
      Edicion: libro.edicion,
      Autor: libro.autor
    });
  }

  async deleteLibro(libroId: string){
    this.db.doc(`Libros/${libroId}`).delete();
  }
}
