export interface IProduct{
   id: string;
   name: string;
   price: string;
   image: string;
   qty: number;
}

export interface ICartState{
   data: IProduct[],
   totalPrice: number,
   totalqty: number,
}