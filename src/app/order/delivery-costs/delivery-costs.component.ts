import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {
  
  @Input() delivery: number 
  @Input() itemsValue: number

  constructor() { }

  ngOnInit() {
  }

  total(): number{
    if(this.delivery ==null || this.itemsValue ==null){
      return 0
    }
    return this.delivery + this.itemsValue
  }

}
