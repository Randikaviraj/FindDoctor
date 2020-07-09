import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finddoctar';
  public nav_op:boolean=true;
  
  
  onchangePos(event){
    
    if(event.clientY>500){
      this.nav_op=false;
    }
    if(event.clientY<50){
      this.nav_op=true;
    }
    
  }
}
