import {Component, Input, Output} from '@angular/core';
import {Product, products} from '../products';
import {Category} from "../category";

@Component({
  selector: 'app-product-list ',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = products;

  @Input() category: string | undefined

  share() {
    window.alert('The product has been shared!');
    window.open('https://t.me/Shedshyi','_blank');

  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  remove(removeID: number){
    this.products = this.products.filter( (x) =>x.id !== removeID)
    console.log(this.products)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/