import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service'
import { CarItem } from '../restaurant-detail/shopping-car/car-item.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number =8

  paymentOptions : RadioOption[] =[
    {label:"Débito", value:"D"}, 
    {label:"Crédito", value:"C"}, 
    {label:"Boleto", value:"B"} 
  ]
   
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }
  
  carItems(): CarItem[]{
    return this.orderService.carItems()
  }

  increaseQty(carItem: CarItem){
    this.orderService.increaseQty(carItem)
  }

  decreaseQty(carItem: CarItem){
      this.orderService.decreaseQty(carItem)
  }

  remove(carItem: CarItem){
    this.orderService.removeItem(carItem)
  }

  itemsValue():number{
    return this.orderService.itemsValue()
}

}
