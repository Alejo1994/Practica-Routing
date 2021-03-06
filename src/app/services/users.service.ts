import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private db:AngularFirestore ) { }

  async getAllUsers(){
   
    return this.db.collection("Usuarios").snapshotChanges()
    .pipe(map(document => {
        return document.map(doc => {
          return {id: doc.payload.doc.id, data:doc.payload.doc.data()}
        })
    }));
  }

  async addUser(user: any){
    return this.db.collection("Usuarios").add({
      Id:user.Id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email
    });
  }

  async updateUser(docId:string ,user: any){
    this.db.doc(`Usuarios/${docId}`).update({
      Id:user.Id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email
    });
  }

  async deleteUser(userId: string){
    this.db.doc(`Usuarios/${userId}`).delete();
  }
}
