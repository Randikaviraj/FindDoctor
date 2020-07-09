import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';
import { Router } from '@angular/router';
import {Doctor} from '../doctor'

@Component({
  selector: 'app-findbyspeciality',
  templateUrl: './findbyspeciality.component.html',
  styleUrls: ['./findbyspeciality.component.css']
})
export class FindbyspecialityComponent implements OnInit {
  public specility:String;
  public result:Doctor[];
  public allfields:Doctor[];
  constructor(private docservice:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.docservice.getallfields().subscribe(data=>{
      try {
        this.allfields=data;
      } catch (error) {
        console.log(error)
      }
      
    })
  }

  back(){
    this.router.navigate(['/loged']);
  }

  search(){
    this.docservice.findBySpeciality(this.specility.trim()).subscribe(data=>{
      console.log(data)
      if (!(data.length<1)) {
        this.result=data;
      } else {
        alert("There is no speciality called "+this.specility);
      }
      
    })
  }

}
