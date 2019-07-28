import {Injectable} from "@angular/core"
import {ShoppingCarService} from "../restaurant-detail/shopping-car/shopping-car.service"
import {CarItem} from "../restaurant-detail/shopping-car/car-item.model"

@Injectable()
export class OrderService{
    constructor(private carService: ShoppingCarService){}

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
}