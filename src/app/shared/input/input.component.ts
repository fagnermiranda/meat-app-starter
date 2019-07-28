import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel} from "@angular/forms"

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string
  objInput:any

  @ContentChild(NgModel) model :NgModel


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.objInput = this.model
    if(this.objInput ===undefined){
      throw new Error("Esse componente precisa ser usado com a diretiva ngModel")
    }
  }
  hasSuccess(){
    return this.objInput.valid && (this.objInput.dirty || this.objInput.touched)
  }
  hasError(){
    return this.objInput.invalid && (this.objInput.dirty || this.objInput.touched)
  }

}
