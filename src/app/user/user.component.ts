import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent  {
 userId: number =13;
 userStatus : string = 'Offline';

 constructor(){
    this.userStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
 }

 getUserStatus(){
    
    return this.userStatus
 }

 getColor()
 {
   if(this.userStatus === 'Online')
   {
    return 'green'
   }
   else
   {
    return 'red';
   }
 }
}