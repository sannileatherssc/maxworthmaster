import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productList:any[] = [];
  total:any;
  finaltotal:any
  constructor(private commonservice:CommonService,private routes:Router) { }

  ngOnInit(): void {
    this.productList = this.commonservice.myProduct.reduce((accumulator, cur) => {
      let name = cur.name;
      let found = accumulator.find((elem: { name: any; }) => elem.name === name)
      if (found) {
        found.rs += cur.rs
        found.count += 1
      }
      else accumulator.push(cur);
      return accumulator;
    }, []);
  this.finaltotal = this.productList.reduce((sum: any, item: { rs: any; }) => sum + item.rs, 0);

    this.commonservice.myProduct = this.productList
      this.commonservice.finalProductList =this.productList
      this.commonservice.finalTotalAmount = this.finaltotal


  }
addProduct1(item:any,index:any){
 item.count++
  this.finaltotal = this.finaltotal + this.productList[index]['price']
  this.commonservice.finalProductList =this.productList
  this.commonservice.finalTotalAmount = this.finaltotal
console.log( this.finaltotal);
}

remove(item:any,index:any){
  if (item.count == 1) {
   this.productList.splice(index,1)
   this.commonservice.finalProductList =this.productList
  } else {
    item.count--
    this.finaltotal = this.finaltotal - this.productList[index]['price']
    this.commonservice.finalTotalAmount = this.finaltotal
  }
}

navigateToForms(){
  this.routes.navigate(['formspage'])
}

print(){


}
}
