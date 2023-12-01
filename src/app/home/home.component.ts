import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId = 'UID0023';

// @Input() name = 'NA';

constructor( private router: Router){}

ngOnInit(): void{

}

navigateToAccount(){
  this.router.navigate(['/account']);
}

}
