import logo from "./assets/logo.png";
import home from "./assets/home.svg";
import Carousel from "./components/Carousel";
import disney from "./assets/disney_letters.png";
import pixar from "./assets/pixar.png";
import marvel from "./assets/marvel.png";
import national from "./assets/national.png";
import './styles/app.css'

const slides = [
  'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/434DF565BA0854857F0D58418057B77044F6140F25283CF56A9EDAFC22E4D05E/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
  'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/99DA25B99FB49D8628048DB0D35CAEB268BF0BCDEC1EDF06C933CDD74775EE74/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginalhttps://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/99DA25B99FB49D8628048DB0D35CAEB268BF0BCDEC1EDF06C933CDD74775EE74/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal'
]

function App() {
  return (
    <div className=" bg-gradient-to-t from-fondos-gradient_bottow to-fondos-gradient_top h-screen w-screen">
      <div className=" w-14 mx-auto pt-6 pb-2">
        <img src={logo} alt="" />
      </div>
      <div className=" w-screen h-24 px-4">
        <Carousel></Carousel>
      </div>
      <div className=" flex m-auto text-center my-4 mx-2 ">
        <button className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md mr-2 border border-opacity-10">
          <img src={disney} alt="" />
        </button>
        <button className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md mr-2 border border-opacity-10">
          <img src={pixar} alt="" />
        </button>
        <button className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md mr-2 border border-opacity-10">
          <img src={marvel} alt="" />
        </button>
        <button className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md mr-2 border border-opacity-10">
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png' alt="" />
        </button>
        <button className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md border border-opacity-10">
          <img src={national} alt="" />
        </button>
      </div>
      <section className=" box-border block max-w-lg w-screen h-24 px-4">
        <div>
          <h4 className=" font-bold text-white">
            Novedades en Disney +
          </h4>
          <div className=" max-w-lg w-screen h-24 px-4">
            <img src={slides} alt="" />
          </div>
        </div>
      </section>
      <article id="noSePudo">
        <img id="img1" src="https://i.imgur.com/YPQlth8.jpg"/>
        <img id="img2" src="https://i.imgur.com/2u3EXCX.png"/>
      </article>
      <div className=" w-20 mx-auto pt-6 pb-2">
        <img src={home} alt="" />
      </div>
    </div>
  );
}

export default App;
