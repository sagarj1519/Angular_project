import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product1Service } from '../services/product/product1.service';

@Component({
  selector: 'app-product1',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.css'
})
export class Product1Component  {
  @Input() product: any;
  products = [
    
    {
      name: 'I-Phone',
      description: 'Smartphone XS16, Rainbuvvy, 3 Inch, Android 10, 16GB, Albastru',
      price: 111499.99,
      image: 'https://s13emagst.akamaized.net/products/64962/64961565/images/res_94e466c780c6a8e75571e00bc64f5fa7.jpg',
      
    },

    {
      name: 'Redmi',
      description: 'Redmi Note 12 Pro+ 5G',
      price: 29999,
      image: 'https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg'
    },
    {
      name: 'Vivo',
      description: 'Vivo T2 5G Mobiles',
      price: 17199.99,
      image: 'https://images.thequint.com/thequint%2F2023-04%2F4cfba07b-158a-4f22-a091-47ab022e2911%2FVivo_T2_and_T2x_5G.jpg?rect=0%2C0%2C1200%2C675'
    },
    {
      name: 'Samsung',
      description: 'Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage)',
      price: 139999.99,
      image: 'https://m.media-amazon.com/images/I/81vxWpPpgNL.jpg'
    },
    {
      name: 'Nokia',
      description: 'Nokia X30 5G',
      price: 36999.99,
      image: 'https://www.kickmobiles.com/images/thumbs/0060214_nokia-x30-5g_808.jpeg'
    },
    {
      name: 'Oneplus',
      description: 'Titan Black Bar Oneplus 11 5G Mobile',
      price: 56000.99,
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/340152459/VB/LM/DS/195428570/oneplus-11-mobile.jpeg'
    },
    {
      name: 'Lenevo',
      description: 'Lenovo Vibe X2 AP 4G Gold 32 GB, Memory Size: 32GB, Screen Size: 5 Inches',
      price: 9500.99,
      image: 'https://5.imimg.com/data5/WB/RR/GLADMIN-26988912/a-series-lenovo-mobile-phones-500x500.png'
    },
    {
      name: 'Poco',
      description: 'Blue Poco Mobile Phones, Memory Size: 16GB',
      price: 55999.99,
      image: 'https://newslivenation.in/wp-content/uploads/2020/12/Poco-C3-Review-Good-battery-yes-but-is-that-enough.jpg'
    },
    

  ];
  
  constructor(private productSrv: Product1Service){}

  

  
}


