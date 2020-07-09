import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doctor} from './doctor'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  findByName(name:String){
    return this.http.get<Doctor[]>(`http://localhost:3000/www/FindDoctor/findbyname.php?doctors_name='${name}'`);
  }

  findByHospital(name:String){
    return this.http.get<Doctor[]>(`http://localhost:3000/www/FindDoctor/findbyhospital.php?hospital_name='${name}'`);

  }

  findByDate(hospital_name:String,date:String){
    return this.http.get<Doctor[]>(`http://localhost:3000/www/FindDoctor/findbydate.php?date='${date}'&hospital_name='${hospital_name}'`);

  }

  findBySpeciality(speciality_name:String){
    return this.http.get<Doctor[]>(`http://localhost:3000/www/FindDoctor/findbyspeciality.php?speciality_name='${speciality_name}'`);

  }

  getallfields(){
    return this.http.get<Doctor[]>(`http://localhost:3000/www/FindDoctor/fields.php`);

  }
}
