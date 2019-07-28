import { Component, OnInit } from '@angular/core';
import {ShoppingCarService} from './shopping-car.service';
import {CarItem} from './car-item.model';
import { MenuItem } from "../menu-item/menu-item.model";


@Component({
  selector: 'mt-shopping-car',
  templateUrl: './shopping-car.component.html'
})

export class ShoppingCarComponent implements OnInit {

  constructor(private shoppingCarService: ShoppingCarService) { }

  ngOnInit() {
  }

  items():CarItem[] {
    return this.shoppingCarService.items
  }

  total():number{
    return this.shoppingCarService.total()
  }

  clear(){
    this.shoppingCarService.clear()
  }

  removeItem(item:CarItem){
    this.shoppingCarService.removeItem(item)
  }

  addItem(item:MenuItem){
    this.shoppingCarService.addItem(item)
  }


}
