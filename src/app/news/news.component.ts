import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  //From website: https://newsapi.org/ You do have API Key, ask to get 
  newsAPIURL="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7384dcbdc85749cc9595edc732296de8";

  newsData:any; 

  //Dependency Injection :: http module
  constructor(private httpClient: HttpClient){}

  
/*
TODO: To display console data in UI 
 
*/

  ngOnInit():void{
    this.httpClient.get(this.newsAPIURL).subscribe(
      (response:any)=>{
        this.newsData = response;
        console.log("RESPONSE");
        console.log(response);
      },
     error => {
      console.error("Error in fetching news data",error)
     }
    );
  }

}
