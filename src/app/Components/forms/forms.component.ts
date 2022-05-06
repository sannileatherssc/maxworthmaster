import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs,{ EmailJSResponseStatus } from '@emailjs/browser';
import { CommonService } from 'src/app/Services/common.service';
declare var Razorpay: any;

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  name!: string

  email!: string;
  mobile!: string;
  desgination!:string
  company!:string
  location!:string
  query!:string
  constructor(private commonservice:CommonService,private route:Router) { }

  ngOnInit(): void {
  }


  message:any = "Payment pending";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "rzp_test_kloCgrLzAlkiuO",
    "amount": "200",
    "name": 'kumar',
    "description": 'Kumar',
    "image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);


    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };



  paynow() {
    const final = this.commonservice.subTotal*100;
    this.paymentId = '';
    this.error = '';
    this.options.amount = final.toString(); //paise
    this.options.description=this.company
    this.options.prefill.name = this.name;
    this.options.prefill.email = this.email;
    this.options.prefill.contact = this.mobile;
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    }
    );
  }
  // @HostListener('window:payment.success', ['$event'])
  // onPaymentSuccess(event: any): void {
  //   this.message = "Success Payment";
  // }


  sendEmail(){
    const name = this.commonservice.finalProductList
      .map((v, i) => v ? this.commonservice.finalProductList[i].name : null)
        .filter(v => v !== null);
        const count = this.commonservice.finalProductList
        .map((v, i) => v ? this.commonservice.finalProductList[i].count : null)
          .filter(v => v !== null);
    var tempParams = {
       to_email:this.email,
      to_name:this.name,
      to_mobile:this.mobile,
      to_product_name:name,
      to_product_price:count,
      to_query:this.query,
      to_location:this.location

    }
      emailjs.send('service_zo4i7up','template_fybgu3b',tempParams,'B05ioUvgt7wdS2W6n').then((result: EmailJSResponseStatus) => {
        this.route.navigate(['sucessfull'])
       alert("We received your purchase request we'll be in touch shortly! ");
      }, (error) => {
        console.log(error.text);
      });
  }
send(){
  this.sendEmail()
  this.sendEmailToMaxWorth()
}
print(){
  let element;
  for (let index = 0; index <this.commonservice.myProduct.length; index++) {
    element = this.commonservice.myProduct[index];
    console.log(element['rs'])
 }

}

sendEmailToMaxWorth(){
  const name = this.commonservice.finalProductList
    .map((v, i) => v ? this.commonservice.finalProductList[i].name : null)
      .filter(v => v !== null);
      const count = this.commonservice.finalProductList
      .map((v, i) => v ? this.commonservice.finalProductList[i].count : null)
        .filter(v => v !== null);
  var tempParams = {
     to_email:this.email,
    from_name:this.name,
    to_mobile:this.mobile,
    to_product_name:name,
    to_product_price:count,
    to_query:this.query,
    to_location:this.location

  }
    emailjs.send('service_zo4i7up','template_guzl24b',tempParams,'B05ioUvgt7wdS2W6n').then((result: EmailJSResponseStatus) => {
      console.log('ok')
    }, (error) => {
      console.log(error.text);
    });
}
}
