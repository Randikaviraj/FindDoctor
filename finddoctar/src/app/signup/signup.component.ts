import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public repassword:string;
  public user= new User();
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.repassword==this.user.password){

      try {
        this.userService.signUser(this.user.fname,this.user.lname,this.user.email,this.user.password).subscribe(
          data=>{
            console.log(data);
            if (data!="-1") {
             alert("Successfully signup");
             this.router.navigate(['/signup']);
            }else{
              alert("Cant signup,there is a account with this email");
              this.router.navigate(['/signup']);
  
            }
            
          }
        );
       
      } catch (error) {
        
        alert("Server error");
        this.router.navigate(['/signup']);
  
      }

    }else{
      alert("Entered password is not matching");
      this.router.navigate(['/signup']);
    }
    
  }

}
