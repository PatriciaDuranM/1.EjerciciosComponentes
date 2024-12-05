/*Crea un componente llamado calculateCircleArea que calcule el área de un círculo pasándole el radio y devuelva un h2 con el resultado.*/ 

const CalculateCircleArea = ({radio}) =>{
 const area = 3.14 * (radio * radio)
 return <h2>El resultado del área  del círculo es {area}</h2>

}

export default CalculateCircleArea