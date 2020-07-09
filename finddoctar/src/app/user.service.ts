import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginUser(email:String){
    
      return this.http.get<User[]>(`http://localhost:3000/www/FindDoctor/login.php?email='${email}'`);
    
    
  }

  signUser(fname:String,lname:String,email:String,password:String){

    return this.http.get<String>(`http://localhost:3000/www/FindDoctor/signup.php?email='${email}'&fname='${fname}'&lname='${lname}'&password='${password}'`);
  }
}
