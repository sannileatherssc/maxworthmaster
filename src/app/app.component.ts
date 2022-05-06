import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { TopnavbarComponent } from './Components/topnavbar/topnavbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'maxworth';
  constructor(private route: Router) {}
  ngOnInit(): void {
    this.route.navigate(['homepage']);
  }
}
