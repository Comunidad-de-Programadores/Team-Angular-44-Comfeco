import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sponsor } from 'src/app/core/models/sponsor.model';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-automatic-carousel',
  templateUrl: './automatic-carousel.component.html',
  styleUrls: ['./automatic-carousel.component.scss'],
})
export class AutomaticCarouselComponent implements OnInit, OnDestroy {
  leadersSubscription: Subscription;
  slides: [Sponsor];

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
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getLeaders();
  }

  ngOnDestroy(): void {
    this.leadersSubscription.unsubscribe();
  }

  getLeaders() {
    this.leadersSubscription = this.homeService.getTeamLeaders().subscribe((leaders) => {
      this.slides = leaders;
    });
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
