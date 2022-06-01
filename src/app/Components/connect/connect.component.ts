import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CommonService } from 'src/app/Services/common.service';
declare var Razorpay: any;
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent implements OnInit {
  name!: string;

  email!: string;
  mobile!: string;
  desgination!: string;
  company!: string;
  location!: string;
  query!: string;
  constructor(private commonservice: CommonService, private route: Router) {}

  sendEmail() {

    var tempParams = {
      to_email: this.email,
      to_name: this.name,
      to_mobile: this.mobile,
      to_product_name: 'Product',
      to_product_price: '888',
      to_query: this.query,
      to_location: this.location,
    };
    emailjs
      .send(
        'service_zo4i7up',
        'template_fybgu3b',
        tempParams,
        'B05ioUvgt7wdS2W6n'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert(
            "We will contact you shortly! "
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  ngOnInit(): void {}
}
