class Order{
    constructor(
        public endereco: string, 
        public numero:number,
        public complemento:string,
        public paymentOption:string,
        public orderItems: OrderItem[] =[]
    ){}
}

class OrderItem{
    constructor(
        public quantidade: number, 
        public menuId: number
    ){}
}

export{Order, OrderItem}