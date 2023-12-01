import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import {User} from 'src/model/user.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  users: User[];

  //LoggerService the service file, where it's  data is going to use here. 
  constructor(private loggerService:LoggerService){
    //Adding user instances in the user array
    this.users = [
      new User('John',27, new Date('2018-03-25')),
      new User('Jack',22, new Date('2020-05-09')),
      new User('Juli',27, new Date('2019-10-21')),
      new User('Rulia',60, new Date('1977-11-28'))

    ];

    this.loggerService.log(`Total Users: ${this.users.length}`);

  }

  ngOnInit():void{

  }

}
