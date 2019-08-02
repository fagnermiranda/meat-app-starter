import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service'
import { CarItem } from '../restaurant-detail/shopping-car/car-item.model'
import { Order, OrderItem } from './order.model'

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
   
  constructor(private orderService: OrderService,
              private router: Router) { }

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

  checkOrder(order: Order){
    order.orderItems = this.carItems()
    //transforma o array de carItem em OrderItem
    .map((carItem: CarItem)=> new OrderItem(carItem.quantidade, carItem.menuItem.id))

    this.orderService.checkOrder(order)
    .subscribe( (orderId: string)=> {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    } )
    console.log(order)
  }


}
