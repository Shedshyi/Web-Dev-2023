import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() removeID = new EventEmitter();

  isPressed: boolean = false


  stars(num: number, check: boolean): string  {
    let text = "";
    for (let i = 0; i < num; i++) {
      if(check){
        text += '*';
      } else{
        text += ' '
      }

    }
    return text;
  }

  share(product: { link: string; }) {
    window.open("https://telegram.me/share/url?url=" + product.link + ">&text=<{{product.name}}>")
  }

  delete(productID: number){
    this.removeID.emit(productID)
  }

  pressLike(){
    if (this.product !== undefined){
      (!this.isPressed ? this.product.likes++ : this.product.likes--)
      this.isPressed = !this.isPressed
    }


  }

}