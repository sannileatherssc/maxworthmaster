import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentreaderproduct',
  templateUrl: './documentreaderproduct.component.html',
  styleUrls: ['./documentreaderproduct.component.css']
})
export class DocumentreaderproductComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  navigateToDocumentReaderProduct(){
    this.route.navigate([''])
  }
}
