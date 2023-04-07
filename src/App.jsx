import logo from "./assets/logo.png";
import home from "./assets/home.svg";
import Carousel from "./components/Carousel";
import disney from "./assets/disney_letters.png";
import pixar from "./assets/pixar.png";
import marvel from "./assets/marvel.png";
import national from "./assets/national.png";
import star_wars from "./assets/star_wars.png";

function App() {
  return (
    <div className=" bg-gradient-to-t from-fondos-gradient_bottow to-fondos-gradient_top h-screen w-screen">
      <div className=" w-14 mx-auto pt-6 pb-2">
        <img src={logo} alt="" />
      </div>
      <div className=" w-screen h-40 px-4">
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
          <img src={star_wars} alt="" />
        </button>
        <button className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md border border-opacity-10">
          <img src={national} alt="" />
        </button>
      </div>
      <div className=" w-20 mx-auto pt-6 pb-2">
        <img src={home} alt="" />
      </div>
    </div>
  );
}

export default App;
