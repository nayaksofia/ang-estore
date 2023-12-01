import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-news',
  templateUrl: './fetch-news.component.html',
  styleUrls: ['./fetch-news.component.css']
})

@Injectable()
export class FetchNewsComponent {
 constructor(private http:HttpClient){}
}
