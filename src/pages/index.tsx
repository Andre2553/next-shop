import { HomeContainer, Products } from "../styles/pages/home";
import { useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Products className="keen-slider__slide">
        <h1>Product</h1>
        <footer>
          <strong>T-shirt</strong>
          <span>$20.00</span>
        </footer>
      </Products>
      <Products className="keen-slider__slide">
        <h1>Product</h1>
        <footer>
          <strong>T-shirt</strong>
          <span>$20.00</span>
        </footer>
      </Products>
    </HomeContainer>
  )
}
