import {CarItem} from './car-item.model'
import {MenuItem} from '../menu-item/menu-item.model'

export class ShoppingCarService{
  items: CarItem[]=[]

  clear(){
    this.items =[]
  }

  addItem(item:MenuItem){
    let foundCarItem = this.items.find((carItem)=> carItem.menuItem.id ===item.id)
    if(foundCarItem){
      this.increaseQty(foundCarItem)
    }
    else{
      this.items.push(new CarItem(item))
    }
  }

  increaseQty(carItem: CarItem){
    carItem.quantidade =  carItem.quantidade +1
  }

  decreaseQty(carItem: CarItem){
    carItem.quantidade =  carItem.quantidade -1
    if(carItem.quantidade ===0){
      this.removeItem(carItem)
    }
  }

  removeItem(carItem:CarItem){
    this.items.splice(this.items.indexOf(carItem),1)
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev+value,0)
  }
  
}
