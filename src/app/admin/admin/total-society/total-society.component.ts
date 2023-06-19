import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-society',
  templateUrl: './total-society.component.html',
  styleUrls: ['./total-society.component.css']
})
export class TotalSocietyComponent implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
