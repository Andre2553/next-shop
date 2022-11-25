import {
  CloseButton,
  Container,
  Footer,
  ImageContainer,
  ListOfProducts,
  Product,
  QuantityButton,
} from "../styles/components/cart";
import Image from "next/image";
import img from "../assets/1.png";
import closeIcon from "../assets/closeIcon.svg";
import { IState } from "../store";
import { IProduct } from "../store/modules/cart/types";
import { useDispatch, useSelector } from "react-redux";
import { changeProductQty } from "../store/modules/cart/actions";
interface ICartProps {
  cartOpenHandler: () => void;
  isOpen: CartStatus;
}
interface CartStatus {
  value: "false" | "true" | "default";
}
export function Cart(props: ICartProps) {
  function decreaseQtyHandler(p: IProduct) {
    console.log("decrease");
    dispatch(changeProductQty(p, p.qty - 1));
  }
  function increaseQtyHandler(p: IProduct) {
    console.log("increase");
    dispatch(changeProductQty(p, p.qty + 1));
  }
  const cart = useSelector<IState, IState>((state) => {
    return state;
  });
  const products = cart.cart.data;
  const dispatch = useDispatch();
  return (
    <Container isOpen={props.isOpen.value}>
      <CloseButton onClick={props.cartOpenHandler}>
        <Image src={closeIcon} />
      </CloseButton>
      <h1>Cart</h1>
      {products.length > 0 ? (
        <>
          <ListOfProducts>
            {products.map((p, idx) => (
              <Product key={idx}>
                <ImageContainer>
                  <Image src={p?.image || ""} width={150} height={150} alt="" />
                </ImageContainer>

                <main>
                  <h2>{p?.name}</h2>
                  <p>{p?.price}</p>
                  <QuantityButton>
                    <button onClick={() => decreaseQtyHandler(p)}>-</button>
                    <p>{p?.qty}</p>
                    <button onClick={() => increaseQtyHandler(p)}>+</button>
                  </QuantityButton>
                </main>
              </Product>
            ))}
          </ListOfProducts>
          <Footer>
            <p>Quantity: {cart.cart.totalqty}</p>
            <h2>Total: {cart.cart.totalPrice}</h2>
            <button>Checkout</button>
          </Footer>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </Container>
  );
}
