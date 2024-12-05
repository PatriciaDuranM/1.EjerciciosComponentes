
const FahrenheitToCelsius = ({grados})=>{
    const cel = (grados -32)/1.8;
    return <h2>{grados}ºF fahrenheit son {cel}ºC centrígrados</h2>
}

export default FahrenheitToCelsius