import { Component, OnInit } from '@angular/core';

import { IProduct } from './../../model/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prdList: IProduct[];
  todayDate: Date = new Date();


  constructor() {
    this.prdList = [
      { id: 1, name: 'Lenove', price: 52000, quantity: 20, imgUrl: 'https://fakeimg.pl/50x50', catId: 1 },
      { id: 2, name: 'Samsung', price: 20500, quantity: 20, imgUrl: 'https://fakeimg.pl/50x50', catId: 2 },
      { id: 3, name: 'Huwawi', price: 20500, quantity: 0, imgUrl: 'https://fakeimg.pl/50x50', catId: 3 },
      { id: 4, name: 'Len', price: 20040, quantity: 1, imgUrl: 'https://fakeimg.pl/50x50', catId: 14 },
      { id: 5, name: 'ove', price: 200540, quantity: 20, imgUrl: 'https://fakeimg.pl/50x50', catId: 2 },
      { id: 6, name: 'enove', price: 255000, quantity: 2, imgUrl: 'https://fakeimg.pl/50x50', catId: 2 },
      { id: 7, name: 'Love', price: 25000, quantity: 20, imgUrl: 'https://fakeimg.pl/50x50', catId: 2 },
      { id: 8, name: 'eove', price: 299000, quantity: 20, imgUrl: 'https://fakeimg.pl/50x50', catId: 2 },
      { id: 9, name: 'prod1', price: 20500, quantity: 0, imgUrl: 'https://fakeimg.pl/50x50', catId: 22 },
      { id: 10, name: 'prod2', price: 552000, quantity: NaN, imgUrl: 'https://fakeimg.pl/50x50', catId: 21 },
      { id: 11, name: 'prod3', price: 42000, quantity: 0, imgUrl: 'https://fakeimg.pl/50x50', catId: 12 },
      { id: 12, name: 'prod4', price: 24000, quantity: 20, imgUrl: 'https://fakeimg.pl/50x50', catId: 12 },
      { id: 12, name: 'prod4', price: 24000, quantity: 20, imgUrl: 'https://fakeimg.pl/50x50', catId: 12 },
      { id: 12, name: 'prod4', price: 24000, quantity: 20, imgUrl: 'https://fakeimg.pl/50x50', catId: 12 },

    ];
  }

  ngOnInit(): void {
  }
  productsTrackBy(index: Number, item: IProduct) {
    return item.id;
  }


}
