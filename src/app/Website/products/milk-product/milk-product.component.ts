import { Component, OnInit  } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-milk-product',
  templateUrl: './milk-product.component.html',
  styleUrls: ['./milk-product.component.css']
})
export class MilkProductComponent implements OnInit {
  ngOnInit(){
    Aos.init();
   }
   exit() {
    window.scrollTo(0, 0);
  }
}
