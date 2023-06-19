import { Component, OnInit  } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-milk',
  templateUrl: './milk.component.html',
  styleUrls: ['./milk.component.css']
})
export class MilkComponent implements OnInit{

  ngOnInit(){
    Aos.init();
   }
   exit() {
    window.scrollTo(0, 0);
  }
}
