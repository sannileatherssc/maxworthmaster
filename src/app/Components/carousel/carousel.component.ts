import { Component, OnInit } from '@angular/core';
import { map, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  temp: number = 3;
  timerSubscription: Subscription | undefined;

  ngOnInit() {
    // this.showSlides(this.slideIndex);
    this.timerSubscription = timer(0, 5000)
      .pipe(
        map(() => {
          this.plus(); // load data contains the http request
        })
      )
      .subscribe();
  }

  plus() {
    if (this.temp < 3) {
      this.temp++;
    } else {
      this.temp = 0;
    }
  }
}




