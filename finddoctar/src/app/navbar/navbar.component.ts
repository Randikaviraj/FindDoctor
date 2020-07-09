import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public main:boolean=true;
  public login:boolean=false;
  public signup:boolean=false;
  public about:boolean=false;

  public static str:String="LogIn";
  public static status :boolean=true;

  public block:string="1";
  public i:number=0
  constructor() { }

  @Input()public parentData;
  
  ngOnInit(): void {
    this.changeBackground();
  }

  changeBackground(){
    
      if(this.i==3){
        this.i=0;
      }
      this.block=`${this.i+1}`;
      this.i++;
    }

    mainclick(){
      this.main=true;
      this.login=false;
      this.signup=false;
      this.about=false;
    }
    
    loginclick(){
      if (!NavbarComponent.status) {
        NavbarComponent.status=true;
        NavbarComponent.str="LogIn";
        
      }
      this.main=false;
      this.login=true;
      this.signup=false;
      this.about=false;
    }
  
    signupclick(){
      this.main=false;
      this.login=false;
      this.signup=true;
      this.about=false;
    }
  
    aboutclick(){
      this.main=false;
      this.login=false;
      this.signup=false;
      this.about=true;
    }

    getValue():String{
        return NavbarComponent.str;
    }

    getStatus():boolean{
      return NavbarComponent.status;
    }
}
