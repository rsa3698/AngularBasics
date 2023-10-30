import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [`
  .container{
    font-size: 30px
  }`]
})
export class UsersComponent {
  allowNewUser: boolean = false;
  userCreatedStatus : string = "No User is Created!";
  userName : string ="";
  isUserCreated : boolean = false;
  users =['user1' , 'user2' , 'user3'];

  constructor(){
    setTimeout(()=>{
      this.allowNewUser = true;
    },5000)
  }

  changeUserCreatedStatus(){

    this.userCreatedStatus = "User is created"
    this.isUserCreated = true;
    this.users.push(this.userName);
  }

  onUpdateUser(event:Event){
    this.userName = (event.target as HTMLInputElement).value;
  }
}
