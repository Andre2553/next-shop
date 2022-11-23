import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import cart from '../assets/bag.svg'
import Link from "next/link";
import { Cart } from "../components/Cart";
import { useState } from "react";
globalStyles();

interface CartStatus{ 
    value: 'false'|'true'| 'default';
}
export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDefault, setDefault] = useState<CartStatus>({'value': 'default'});
  function cartOpenHandler() {
    setIsOpen(!isOpen);
    setDefault({'value': isOpen ? 'false' : 'true'});
  }
  return (
  <Container>
    <Header>
      <Link href="/" prefetch={false}><Image src={logoImg} alt="" /></Link>
      <button onClick={cartOpenHandler}><Image src={cart} alt="" /></button>
    </Header>
     <Cart cartOpenHandler={cartOpenHandler} isOpen={isDefault}/>
    <Component {...pageProps} />
  </Container>
)}

