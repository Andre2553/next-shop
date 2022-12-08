export interface IProduct{
   id: string;
   name: string;
   price: string;
   image: string;
   qty: number;
   defaultPriceId?: string;
}

export interface ICartState{
   data: IProduct[],
   totalPrice: number,
   totalqty: number,
}