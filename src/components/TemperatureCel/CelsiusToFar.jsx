


const CelsiusToFahrenheit = ({grados})=>{
    const far = (grados * 1.8) + 32;
    return <h2>{grados}ºC centrígrados son {far}ºF fahrenheit</h2>
}

export default CelsiusToFahrenheit