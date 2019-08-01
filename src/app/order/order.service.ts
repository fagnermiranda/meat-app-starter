import { Injectable } from "@angular/core"
import { ShoppingCarService } from "../restaurant-detail/shopping-car/shopping-car.service"
import { CarItem } from "../restaurant-detail/shopping-car/car-item.model"
import { Http, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Order, OrderItem } from "./order.model";
import "rxjs/add/operator/map";
import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService{
    constructor(
        private carService: ShoppingCarService, 
        private http: Http
    ){}

    carItems(): CarItem[]{
        return this.carService.items
    }

    increaseQty(carItem: CarItem){
        this.carService.increaseQty(carItem)
    }

    decreaseQty(carItem: CarItem){
        this.carService.decreaseQty(carItem)
    }

    removeItem(carItem:CarItem){
        this.carService.removeItem(carItem)
    } 
    
    itemsValue():number{
        return this.carService.total()
    }

    clear(){
        this.carService.clear()
    }

    checkOrder(order: Order):Observable<string>{
      const headers= new Headers()
      headers.append('Content-Type','application/json')
      return this.http.post(`${MEAT_API}/orders`, 
                            JSON.stringify(order),
                            new RequestOptions({headers:headers}))
                      .map(response=>response.json())   
    }
}