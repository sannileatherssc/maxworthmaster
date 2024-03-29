import { Component, OnInit } from '@angular/core';
import { NavigationserviceService } from 'src/app/Services/navigationservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private navigation: NavigationserviceService) {}

  ngOnInit(): void {}

  navigateToPrivacypolicy() {
    this.navigation.navigateToPrivacypolicy();
  }

  // navigateToSolutions() {
  //   this.navigation.navigateToSolutions();
  // }
}
