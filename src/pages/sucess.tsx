import Link from "next/link";
import { ImageContainer, SucessContainer } from "../styles/pages/success";

export default function Success(){
return (<SucessContainer>
   <h1>Success</h1>
   <ImageContainer>

   </ImageContainer>
   <p>Awesome! your products will be arrive soon!</p>
   <Link href="/">
      Back to home
   </Link>
</SucessContainer>)
}