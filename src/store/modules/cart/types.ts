export interface IProduct{
   id: number;
   name: string;
   price: number;
   image: string;
   description: string;
   qty: number;
}

export interface ICartState{
   data: IProduct[]
}