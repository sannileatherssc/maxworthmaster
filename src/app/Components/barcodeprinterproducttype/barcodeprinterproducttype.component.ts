import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-barcodeprinterproducttype',
  templateUrl: './barcodeprinterproducttype.component.html',
  styleUrls: ['./barcodeprinterproducttype.component.css']
})
export class BarcodeprinterproducttypeComponent implements OnInit {

  constructor(private commonservice :CommonService) { }

  ngOnInit(): void {
  }
  addProduct1(rs:number,name:string,image:string,count:number,price:number){
    this.commonservice.addProduct(rs,name,image,count,price);
    alert(name+' added to cart.please check your cart');
    }
}
