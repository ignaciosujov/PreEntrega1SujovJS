

let tna = 91;
let verificarUsuario = prompt("¿Es usted cliente de CoderBank? Respuestas posibles: Si - No")
if (verificarUsuario.toLowerCase() == "si"){
function calcularPlazoFijo(monto){
    if(parseInt(prompt("Especifique su edad para poder confirmar la operacion")) >= 18){
    montoPorMes = monto * tna / 100 / 12
    montoGanado = montoPorMes * mesesACotizar
    montoTotal = montoGanado + monto

    }else{
        alert("Disculpe, debe ser mayor de edad para realizar el proceso")
    };
}
    alert(`Bienvenido al simulador de cotizacion de plazos fijos. La Tasa Nominal Actual es de ${tna}%`)
    let montoACotizar = parseInt(prompt("¿Cuanto queres invertir?"))
    let mesesACotizar = parseInt(prompt("¿A cuantos meses?"))
    calcularPlazoFijo(montoACotizar)
    alert(`El interes mensual a recibir sera de ${montoPorMes.toFixed(2)}, por lo tanto haciendolo a ${mesesACotizar} meses sera de ${montoGanado.toFixed(2)}.`)
    alert(`Usted tendra un total de ${montoTotal.toFixed(2)} pesos al terminar el plazo fijo.`)
}else{
    alert("debe ser cliente para continuar")
}