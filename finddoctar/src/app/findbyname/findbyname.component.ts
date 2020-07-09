import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';
import { Router } from '@angular/router';
import {Doctor} from '../doctor'

@Component({
  selector: 'app-findbyname',
  templateUrl: './findbyname.component.html',
  styleUrls: ['./findbyname.component.css']
})
export class FindbynameComponent implements OnInit {
  public docname:String;
  public result:Doctor[];
  constructor(private docservice:DoctorService,private router:Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/loged']);
  }

  search(){
    this.docservice.findByName(this.docname.trim()).subscribe(data=>{
      if (!(data.length<1)) {
        this.result=data;
      } else {
        alert("There is no doctor with name "+this.docname);
      }
      
    })
  }
}
