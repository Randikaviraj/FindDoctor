import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {NavbarComponent} from '../navbar/navbar.component'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user= new User();
  private dbusers:User[];
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }

  loginformSubmit(){
    
    try {
      this.userService.loginUser(this.user.email).subscribe(
        data=>{
          console.log(data);
          this.dbusers=data;
          if(data.length< 1){
           
            alert("You are not registered");
            this.router.navigate(['/login']);
            return;
          }
          if (this.dbusers[0].password==this.user.password) {
            NavbarComponent.str="LogOut";
            NavbarComponent.status=false;
            this.router.navigate(['/loged']);
          }else{
            alert("Entered password or email is incorrect");
            this.router.navigate(['/login']);

          }
          
        }
      );
     
    } catch (error) {
      
      alert("Server error");
      this.router.navigate(['/login']);

    }
  
    
  }

}
