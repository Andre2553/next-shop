import { IProduct} from "./types"

export function addProduct(product: IProduct) {
   return {
      type: "ADD_UNIVERSITY_TO_TABLE",
      payload: {
         product
      }
   }
}
export function deleteProduct() {
   return {
      type: "DELETE_PRODUCT_FROM_CART"
   }
}