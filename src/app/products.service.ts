import { Injectable } from '@angular/core';
import { Product } from 'src/modal/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Create product array : raw datas
  products: Product[] = [
    new Product(101, "Adidas Alphabounce Shoe", 3000 , 4.5),
    new Product(201, "Samsung LED TV",30000, 5.0),
    new Product(301,"Cardbury 5 Star",20, 4.5),
    new Product(401,"Apple iPhone 11",53000, 4.8),
    new Product(501,"Samsung Fold", 73000,4.3),
    new Product(501,"Hydarate Water Bottle", 5000,5.0)
  ];

  getProducts(){
    return this.products;
  }
  constructor() { }
}

/*
Services acting as a data service , which has data.
*/