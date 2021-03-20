import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sponsor } from 'src/app/core/models/sponsor.model';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-static-carousel',
  templateUrl: './static-carousel.component.html',
  styleUrls: ['./static-carousel.component.scss'],
})
export class StaticCarouselComponent implements OnInit, OnDestroy {
  sponsorsSubscription: Subscription;
  slides: [Sponsor];
  slideConfig = {
    arrows: true,
    dots: true,
    lazyLoad: 'ondemand',
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:'<span class="material-icons arrow-left"> keyboard_arrow_left </span>',
    nextArrow:'<span class="material-icons arrow-right"> keyboard_arrow_right </span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getSponsors();
  }

  ngOnDestroy(): void {
    this.sponsorsSubscription.unsubscribe();
  }

  getSponsors() {
    this.sponsorsSubscription = this.homeService.getSponsors().subscribe((sponsors) => {
      this.slides = sponsors;
    });
  }

  addSlide() {
    //this.slides.push({ img: 'http://placehold.it/350x150/777777' });
    console.log('slick addSlide');
  }

  removeSlide() {
    //this.slides.length = this.slides.length - 1;
    console.log('slick removeSlide');
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
