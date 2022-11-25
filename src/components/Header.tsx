import Image from "next/image";
import Link from "next/link";
import {
  CartButtonContainer,
  HeaderStyle,
  NumberSpan,
} from "../styles/pages/app";
import { IState } from "../store";
import { useState } from "react";
import { useSelector } from "react-redux";
import cart from "../assets/bag.svg";
import logoImg from "../assets/logo.svg";
import { Cart } from "./Cart";
interface CartStatus {
  value: "false" | "true" | "default";
}
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDefault, setDefault] = useState<CartStatus>({ value: "default" });
  function cartOpenHandler() {
    setIsOpen(!isOpen);
    setDefault({ value: isOpen ? "false" : "true" });
  }
  const products = useSelector<IState, number>((state) => {
    console.log(state.cart.totalqty);
    return state.cart.totalqty;
  });
  return (
    <>
      <HeaderStyle>
        <Link href="/" prefetch={false}>
          <a>
            <Image src={logoImg} alt="" />
          </a>
        </Link>
        <CartButtonContainer onClick={cartOpenHandler}>
          <NumberSpan>{products}</NumberSpan>
          <button>
            <Image src={cart} alt="" />
          </button>
        </CartButtonContainer>
      </HeaderStyle>
      <Cart cartOpenHandler={cartOpenHandler} isOpen={isDefault} />
    </>
  );
}
