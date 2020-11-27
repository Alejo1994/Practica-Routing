import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros:any;

  constructor(private librosService:LibrosService,
              private router:Router) { }

  ngOnInit(): void {
    this.libros=new Array();
    this.getLibros();
    console.log(this.libros);
  }

  async getLibros(){
    //obtener todos los users
  (await this.librosService.getAllLibros()).subscribe( resp => {
    this.libros= [];
   // return this.users;
   resp.forEach(element => {
     this.libros.push(element);
    });  
  })
}

  //En este caso seria con el ejemplo del evento onclick
  goToBorrarLibro(id:string){
    this.router.navigate(['libros/delete', id]);
  }

  goToEditarLibro(docId:string){
    this.librosService.updateLibro(docId,{titulo:"aaaaa",autor:"bbbbb",edicion:"cccccc"});
  }

}
