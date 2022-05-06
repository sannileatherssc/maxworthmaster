import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {


  productList:any;
myProduct:any[]=[];
  constructor( private routes :Router,private commonservice :CommonService) { }

  ngOnInit(): void {
  }

  addProduct1(rs:number,name:string,image:string,count:number,price:number){
  this.commonservice.addProduct(rs,name,image,count,price);
  }

  navigateToCartPage(){
    this.routes.navigate(["checkout"]);
  }



}
