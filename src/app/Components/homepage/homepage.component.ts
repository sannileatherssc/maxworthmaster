import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationserviceService } from 'src/app/Services/navigationservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private navigation: NavigationserviceService) {}

  ngOnInit(): void {}
  navigateToProduct() {
    this.navigation.navigateToProduct();
  }

  navigateToAirradio() {
    this.navigation.navigateToAirradio();
  }

  navigateToAboutus() {
    this.navigation.navigateToAboutus();
  }

  navigateToHomepage() {
    this.navigation.navigateToHomepage();
  }

  navigateToAviationprinter() {
    this.navigation.navigateToAviationprinter();
  }

  navigateToBarcodescanner() {
    this.navigation.navigateToBarcodescanner();
  }

  navigateToDocumentreader() {
    this.navigation.navigateToDocumentreader();
  }

  navigateToMobilecomputers() {
    this.navigation.navigateToMobilecomputers();
  }

  navigateToPrinters() {
    this.navigation.navigateToPrinters();
  }

  navigateToRfid() {
    this.navigation.navigateToRfid();
  }

  navigateToWireless() {
    this.navigation.navigateToWireless();
  }

  //start

  navigateToAviationsector() {
    this.navigation.navigateToAviationsector();
  }

  navigateToEgovernancesector() {
    this.navigation.navigateToEgovernancesector();
  }

  navigateToFriendlymobilesector() {
    this.navigation.navigateToFriendlymobilesector();
  }

  navigateToHealthcaresector() {
    this.navigation.navigateToHealthcaresector();
  }

  navigateToHospitalitysector() {
    this.navigation.navigateToHospitalitysector();
  }

  navigateToManufacturingsector() {
    this.navigation.navigateToManufacturingsector();
  }

  navigateToRetailsector() {
    this.navigation.navigateToRetailsector();
  }

  navigateToTelcomsector() {
    this.navigation.navigateToTelcomsector();
  }

  // new end

  navigateToCheckout() {
    this.navigation.navigateToCheckout();
  }
}
