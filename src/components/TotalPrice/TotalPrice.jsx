

const TotalPrice = ({precio}) =>{
    const total= precio + (precio*0.21)
    return <h2> El precio total es de {total}€</h2>
}
export default TotalPrice