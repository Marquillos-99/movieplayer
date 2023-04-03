import logo from "./assets/logo.png";
import home from "./assets/home.svg";
import Carousel from "./components/Carousel";

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
        <div className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md mr-2 border border-opacity-10">
          hola
        </div>
        <div className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md mr-2 border border-opacity-10">
          hi
        </div>
        <div className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md mr-2 border border-opacity-10">
          p
        </div>
        <div className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md mr-2 border border-opacity-10">
          d
        </div>
        <div className=" w-14 h-14 bg-gradient-to-t from-buttons-bottom to-buttons-top border-buttons-border rounded-md border border-opacity-10">
          dd
        </div>
      </div>
      <div className=" w-20 mx-auto pt-6 pb-2">
        <img src={home} alt="" />
      </div>
    </div>
  );
}

export default App;
