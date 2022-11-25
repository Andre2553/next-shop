import { IProduct} from "./types"

export function addProduct(product: IProduct) {
   return {
      type: "ADD_PRODUCT_TO_CART",
      payload: {
         product
      }
   }
}
export function changeProductQty(product: IProduct, qty: number) {
   return {
      type: "CHANGE_PRODUCT_QTY",
      payload: {
         product,
         qty,
      }
   }
}