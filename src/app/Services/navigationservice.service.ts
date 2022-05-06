import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from 'express';


@Injectable({
  providedIn: 'root',
})
export class NavigationserviceService {
  constructor(private route: Router) {}

  navigateToProduct() {
    this.route.navigate(['productpage']);
  }

  navigateToHomepage() {
    this.route.navigate(['homepage']);
  }

  navigateToAboutus() {
    this.route.navigate(['aboutus']);
  }

  navigateToAirradio() {
    this.route.navigate(['airradio']);
  }

  navigateToAviationprinter() {
    this.route.navigate(['aviationprinter']);
  }

  navigateToBarcodescanner() {
    this.route.navigate(['barcodescanner']);
  }

  navigateToDocumentreader() {
    this.route.navigate(['documentreader']);
  }

  navigateToMobilecomputers() {
    this.route.navigate(['mobilecomputers']);
  }

  navigateToPrinters() {
    this.route.navigate(['printers']);
  }

  navigateToRfid() {
    this.route.navigate(['rfid']);
  }

  navigateToWireless() {
    this.route.navigate(['wireless']);
  }

  //sectors

  navigateToAviationsector() {
    this.route.navigate(['aviationsector']);
  }

  navigateToEgovernancesector() {
    this.route.navigate(['egovernancesector']);
  }

  navigateToFriendlymobilesector() {
    this.route.navigate(['friendlymobilesector']);
  }

  navigateToHealthcaresector() {
    this.route.navigate(['healthcaresector']);
  }

  navigateToHospitalitysector() {
    this.route.navigate(['hospitalitysector']);
  }

  navigateToManufacturingsector() {
    this.route.navigate(['manufacturingsector']);
  }

  navigateToRetailsector() {
    this.route.navigate(['retailsector']);
  }

  navigateToTelcomsector() {
    this.route.navigate(['telcomsector']);
  }

  navigateToCheckout() {
    this.route.navigate(['checkout']);
  }
}
