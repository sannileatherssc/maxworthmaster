import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root',
})
export class CommonService {
  myProduct: any[] = [];
  finalProductList: any[] = [];
  finalTotalAmount!: number;
  subTotal: any;
  constructor() {}

  addProduct(
    rs: number,
    name: string,
    image: string,
    count: number,
    price: number
  ) {
    this.myProduct.push({
      rs: rs,
      name: name,
      image: image,
      count: count,
      price: price,
    });

    console.log(this.myProduct.length);
    this.updateCartItems();
  }

  removeProduct() {
    this.myProduct.pop();
  }

  private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getCartItems() {
    return this.totalItems.asObservable();
  }

  updateCartItems() {
    this.totalItems.next(this.myProduct.length);
  }
}
