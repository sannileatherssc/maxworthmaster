import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-airradio',
  templateUrl: './airradio.component.html',
  styleUrls: ['./airradio.component.css']
})
export class AirradioComponent implements OnInit {

  productList:any;
  myProduct:any[]=[];
    constructor( private routes :Router,private commonservice :CommonService) { }

    ngOnInit(): void {
    }

    addProduct1(rs:number,name:string,image:string,count:number,price:number){
    this.commonservice.addProduct(rs,name,image,count,price);
    alert(name+' added to cart.please check your cart');
    }

    navigateToCartPage(){
      this.routes.navigate(["checkout"]);
    }

}
