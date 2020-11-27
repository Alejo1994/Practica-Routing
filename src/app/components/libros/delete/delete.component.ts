import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private libroServices:LibrosService,
              private router:Router) { }

  ngOnInit(): void {
    let libroId=this.route.snapshot.paramMap.get("id");
    this.libroServices.deleteLibro(libroId);
    
  }

}
