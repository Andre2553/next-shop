import {
  CloseButton,
  Container,
  ImageContainer,
  ListOfProducts,
  Product,
} from "../styles/components/cart";
import Image from "next/image";
import img from "../assets/1.png";
import closeIcon from "../assets/closeIcon.svg";
interface ICartProps {
  cartOpenHandler: () => void;
  isOpen: CartStatus;
}
interface CartStatus {
  value: "false" | "true" | "default";
}
export function Cart(props: ICartProps) {
  return (
    <Container isOpen={props.isOpen.value}>
      <CloseButton onClick={props.cartOpenHandler}>
        <Image src={closeIcon} />
      </CloseButton>
      <h1>Cart</h1>
      <ListOfProducts>
        <Product>
         <ImageContainer>
         <Image src={img} width={200} height={200} alt="" />
         </ImageContainer>
          
          <main>
            <h2>Product Name</h2>
            <p>Product Description</p>
            <p>Product Price</p>
          </main>
        </Product>
      </ListOfProducts>
    </Container>
  );
}
