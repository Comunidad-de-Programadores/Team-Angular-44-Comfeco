import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automatic-carousel',
  templateUrl: './automatic-carousel.component.html',
  styleUrls: ['./automatic-carousel.component.scss'],
})
export class AutomaticCarouselComponent implements OnInit {
  slides = [
    { img: 'assets/images/home/carousel/bezael.jpg' },
    { img: 'assets/images/home/carousel/fernando.jpg' },
    { img: 'assets/images/home/carousel/fernando.jpg' },
    { img: 'assets/images/home/carousel/fernando.jpg' },
    { img: 'assets/images/home/carousel/fernando.jpg' },
    { img: 'assets/images/home/carousel/sacha.jpg' },
    { img: 'assets/images/home/carousel/bezael.jpg' },
  ];
  slideConfig = {
    arrows: true,
    dots: true,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
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
