import { Component, DoCheck, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css'],
})
export class TopnavbarComponent implements OnInit,DoCheck {
  count =0;

  constructor(private route: Router,private commonservice:CommonService) {}
  ngDoCheck(): void {
    let changes = this.commonservice.finalProductList
    if (changes) {
      this.count = this.commonservice.finalProductList.reduce((sum: any, item: { count: any; }) => sum + item.count, 0);
      console.log(this.count)
    }
  }

count1 = 0;

  ngOnInit(): void {
          this.commonservice.getCartItems().subscribe((value) => {
             this.count1 = value;
           });
  }

  navigateToCheckout() {
    this.route.navigate(['checkout']);
  }

  navigateToConnect() {
    this.route.navigate(['connect']);
  }

  navigateToSolutions() {
    this.route.navigate(['solutions']);
  }

  navigateToAboutus() {
    this.route.navigate(['aboutus']);
  }

  navigateToHomepage() {
    this.route.navigate(['homepage']);
  }

  navigateToCartPage(){
    this.route.navigate(['checkout']);
  }



}
