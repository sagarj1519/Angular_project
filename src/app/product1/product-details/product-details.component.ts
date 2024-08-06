import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterLink,HttpClientModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
[x: string]: any;

  @Input() product_details: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/product_details").subscribe(
      data => {
        this.product_details = data;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
  

  
   
}
