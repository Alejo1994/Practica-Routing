import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userId:string;
  
  constructor(private route:ActivatedRoute) {
    this.userId="";
   }

  ngOnInit(): void {
    this.userId=this.route.snapshot.paramMap.get("id");
    console.log("UserId",this.userId);
  }

}
