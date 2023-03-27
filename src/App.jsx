import logo from "./assets/logo.png";
import home from "./assets/home.svg";

function App() {
  return (
    <div className=" bg-gradient-to-t from-fondos-gradient_bottow to-fondos-gradient_top h-screen w-screen">
      <div className=" w-20 mx-auto pt-6 pb-2">
        <img src={logo} alt="" />
      </div>
      <div className=" w-20 mx-auto pt-6 pb-2">
        <img src={home} alt="" />
      </div>
    </div>
  );
}

export default App;
