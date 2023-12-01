// import { Component } from '@angular/core';
import { Component,  OnDestroy,OnInit} from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

   counter : number = 0; //Initialize counter
   observable!: Observable<number>; // Add non-null assertion here
   subscription: Subscription = new Subscription(); //Initialize Subscription
 
   name: string=" ";

  //Async Pipe
  namePromise: Promise<string>;
  
  //Async Pipe With Observables



  constructor(){
   this.getValue().then(v => this.name = v);
   this.namePromise = this.getNameValue();
  }
  
  ngOnInit(): void{
  //  this. observable = new Observable((observer:Observer<number>)=>{
  //   let value = 0
  //   setInterval(
  //     ()=> {
  //       observer.next(value++);
  //     },1000
  //   );
  //  });
  //  this.subscription = this.observable.subscribe((value:number)=>{
  //   this.counter=value;
  //  });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getValue(){
    return new Promise<string>((resolve, reject)=>{
      setTimeout(()=>resolve("ABC Technologies"),2000);
    });
  }

  getNameValue(){
    return new Promise<string>((resolve, reject)=>{
      setTimeout(()=>resolve("ABC Technologies-1"),2000);
    });
  }


  // title = 'estore';
  // appName = 'eStore- Shop with easy like never before'
}
