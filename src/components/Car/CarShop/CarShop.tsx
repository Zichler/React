import Bike from "../../Bike/Bike";
import Car from "../Car";
import step from "./img/thumb_europlan_exe_car.jpg"

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      <img src={step} alt="Car" />
      <Car brand="Mercedes" color="black" />
      <Car brand="Opel" color="yellow" />
      <Car brand="Tesla" color="red" />
      <Car brand="Lada" color="green" />
      <Car brand="Audi" color="pink" />
      <h2>Bikes</h2>
      <Bike brand="Harley-Davidson"    gears={6} price={18000} />
      <Bike brand="Honda CRF300 Rally" gears={6} price={8500} />
      <Bike brand="BMW F900 GS"        gears={3} price={17000} />
      <Bike brand="Suzuki GSX-S1000"   gears={4} price={12000} />
      <Bike brand="KTM 790 Duke"       gears={5} price={9500} />
<img src="/alt.jpg" alt="auto" />


    </div>
  )
}
