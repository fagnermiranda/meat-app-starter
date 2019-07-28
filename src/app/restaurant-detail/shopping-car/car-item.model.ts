import {MenuItem} from '../menu-item/menu-item.model'

export class CarItem{
  constructor(public menuItem: MenuItem,
              public quantidade: number =1){}

  value():number{
    return this.menuItem.price * this.quantidade
  }

}
