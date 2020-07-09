import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';
import { Router } from '@angular/router';
import {Doctor} from '../doctor'

@Component({
  selector: 'app-findbyhospital',
  templateUrl: './findbyhospital.component.html',
  styleUrls: ['./findbyhospital.component.css']
})
export class FindbyhospitalComponent implements OnInit {
  public hosname:String;
  public result:Doctor[];
  constructor(private docservice:DoctorService,private router:Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/loged']);
  }

  search(){
    this.docservice.findByHospital(this.hosname).subscribe(data=>{
      if (!(data.length<1)) {
        this.result=data;
      } else {
        alert("Result not found in "+this.hosname);
      }
      
    })
  }

}
