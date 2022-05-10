import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './Services/common.service';
// import { TopnavbarComponent } from './Components/topnavbar/topnavbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'maxworth';
  count= 0;
  constructor(private route: Router, private commonservice:CommonService) {}
  ngOnInit(): void {
    this.route.navigate(['homepage']);
    this.count = this.commonservice.finalProductList.reduce(
      (sum: any, item: { rs: any }) => sum + item,
      0
    );
  }
}
