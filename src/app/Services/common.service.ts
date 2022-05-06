import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  myProduct: any[]=[];
  finalProductList:any[]=[];
  finalTotalAmount!:number
  subTotal : any;
  constructor() { }

  addProduct(rs:number,name:string,image:string,count:number,price:number){
    this.myProduct.push({ rs:rs, name:name,image:image,count:count,price:price});

    console.log(this.myProduct.length)
  }

  removeProduct(){
    this.myProduct.pop()
  }
}
