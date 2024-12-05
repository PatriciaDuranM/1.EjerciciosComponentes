/*Crea un componente llamado calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura y devuelva un h2 con el resultado.*/


const CalculateTriangleArea = ({lado}) =>{
    const area= (lado * lado)/2;
    return <h2>El resultado del área  del triangulo es {area}</h2>
}

export default CalculateTriangleArea