import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-airradioproduct',
  templateUrl: './airradioproduct.component.html',
  styleUrls: ['./airradioproduct.component.css']
})
export class AirradioproductComponent implements OnInit {

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
