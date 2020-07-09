import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';
import { Router } from '@angular/router';
import {Doctor} from '../doctor'

@Component({
  selector: 'app-findbydate',
  templateUrl: './findbydate.component.html',
  styleUrls: ['./findbydate.component.css']
})
export class FindbydateComponent implements OnInit {
  public date:String;
  public hosname:String;
  public result:Doctor[];
  constructor(private docservice:DoctorService,private router:Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/loged']);
  }

  search(){
    console.log(this.hosname+" "+this.date)
    this.docservice.findByDate(this.hosname,this.date).subscribe(data=>{
      if (!(data.length<1)) {
        this.result=data;
      } else {
        alert("Result is not found");
      }
      
    })
  }

}
