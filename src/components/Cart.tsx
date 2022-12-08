import {
  CloseButton,
  Container,
  Footer,
  ImageContainer,
  IsEnptyText,
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
import { useState } from "react";
import axios from "axios";
interface ICartProps {
  cartOpenHandler: () => void;
  isOpen: CartStatus;
}
interface CartStatus {
  value: "false" | "true" | "default";
}
export function Cart(props: ICartProps) {
  const [isCreateingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

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
  const totalprice = new Intl.NumberFormat("au", {
    style: "currency",
    currency: "AUD",
  }).format(cart.cart.totalPrice);

  async function handleGoToCheckout() {
    try {
      setIsCreatingCheckoutSession(true);
      const line_items = products.map((p) => {
        return {
          price: p.defaultPriceId,
          quantity: p.qty,
        };
      });
      const response = await axios.post("/api/checkout", {
        line_items,
      });
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Fail to redirect to checkout");
    }
  }
  const dispatch = useDispatch();
  return (
    <Container isOpen={props.isOpen.value}>
      <CloseButton onClick={props.cartOpenHandler}>
        <Image src={closeIcon} alt="close icon" />
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
            <h2>Total: {totalprice}</h2>
            <button
              disabled={isCreateingCheckoutSession}
              onClick={() => handleGoToCheckout()}
            >
              Checkout
            </button>
          </Footer>
        </>
      ) : (
        <IsEnptyText>Cart is empty</IsEnptyText>
      )}
    </Container>
  );
}
