import { Component, OnInit } from '@angular/core';
import { NavigationserviceService } from 'src/app/Services/navigationservice.service';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css'],
})
export class PrivacypolicyComponent implements OnInit {
  constructor(private navigation: NavigationserviceService) {}

  ngOnInit(): void {}

  navigateToPrivacypolicy() {
    this.navigation.navigateToPrivacypolicy();
  }
}
