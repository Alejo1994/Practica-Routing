import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any;
  userId:string;

  constructor(private userService:UsersService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId="";
    this.getUsers();
  }

  async getUsers(){
      //obtener todos los users
    (await this.userService.getAllUsers()).subscribe( resp => {
      this.users= [];
     // return this.users;
     resp.forEach(element => {
       this.users.push(element);
      });
      console.log("getUsers = " ,this.users);  
    })
  }

   //En este caso seria con el ejemplo del evento onclick
  goToEditUser(id:string){
    console.log("Usuarios",id);
    this.router.navigate(['/usuarios/edit', id])
  }

}
