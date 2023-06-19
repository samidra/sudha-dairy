import { Component } from '@angular/core';
import * as Aos from 'aos';
import { SliderModel } from 'src/app/MODEL/slider.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apiLoaded = false;
  videoId = '-AEf52Pp9yo';

   exit() {
    window.scrollTo(0, 0);
  }
  ngOnInit() {
    Aos.init();
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  slides: SliderModel[] = [
    {
      img: 'assets/images/Sliding1.jpg',
    },
    {
      img: 'assets/images/Sliding2.jpg',
    },
    {
      img: 'assets/images/Sliding3.jpg',
    },
    {
      img: 'assets/images/Sliding4.jpg', 
    },
  ]
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1200,
  };

  slickInit(e: any) { }

  breakpoint(e: any) { }

  afterChange(e: any) { }

  beforeChange(e: any) { }

}
