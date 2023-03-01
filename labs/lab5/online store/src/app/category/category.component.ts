import { Component } from '@angular/core';
import {categories} from "../category";
import {Category} from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = categories
  currentCategory : string | undefined


  Selected(category: string){
    this.currentCategory = category;
  }



}