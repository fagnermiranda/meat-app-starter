import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions : RadioOption[] =[
    {label:"Débito", value:"D"}, 
    {label:"Crédito", value:"C"}, 
    {label:"Boleto", value:"B"} 
  ]
   

  constructor() { }

  ngOnInit() {
  }

}
