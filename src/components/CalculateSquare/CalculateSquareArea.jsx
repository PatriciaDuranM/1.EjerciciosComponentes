/*- Crea un componente llamado calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado y devuelva un h2 con el resultado */

const CalculateSquareArea = ({lado}) =>{
    const area= lado * lado;
    return <h2>El resultado del área del cuadrado es {area}</h2>
}

export default CalculateSquareArea