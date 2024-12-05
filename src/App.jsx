import CalculateSquareArea from "./components/CalculateSquare/CalculateSquareArea";
import CalculateTriangleArea from "./components/CalculateTriangleArea/CalculateTriangleArea";
import CalculateCircleArea from "./components/Circle/CalculateCircleArea";
import SayHello from "./components/Hello/hello";
import CelsiusToFahrenheit from "./components/TemperatureCel/CelsiusToFar";
import FahrenheitToCelsius from "./components/TemperatureFar/FartoCel";
import TotalPrice from "./components/TotalPrice/TotalPrice";
import WriteMessage from "./components/WriteMessage/WriteMessage";




const App = () => {
	
	return (<>
	
	<SayHello name='Patri' />
	<CalculateSquareArea lado={2} />
	<CalculateTriangleArea lado = {4}/>
	<CalculateCircleArea radio = {5}/>
	<CelsiusToFahrenheit grados = {28}/>
	<FahrenheitToCelsius grados = {82.4}/>
	<TotalPrice precio = {2}/>
	<WriteMessage name= 'Lucia' material = 'madera' size= 'M' note='Paco' />


	</>)
};

export default App;
