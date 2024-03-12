const pasajeros = []
const listaUsuarios = document.querySelector(".personas")

function addPassanger() {
  let newPassanger = document.getElementById("nuevoPasajero").value
    pasajeros.push(newPassanger)
    console.log(newPassanger)
    document.getElementById("nuevoPasajero").value = ""
    console.log(pasajeros)
    if (pasajeros.length > 11 ){
        alert("ya no caben mas pasajeros")
    } else { alert("añadido correctamente")}
};

function deletePassanger() {
    pasajeros.pop()
    console.log(pasajeros)
};

function passangerList() {
    for (let i=0; i< pasajeros.length; i++) {
        listaUsuarios.innerHTML += pasajeros[i] + "<br>"
        console.log(pasajeros)
    }
};

function replaceOnPlace() {
    let pasajeroAsustituir = parseInt(document.getElementById("numeroPasajero").value)
    let nombreAsustituir = document.getElementById("altPasajero").value
    pasajeros[(pasajeroAsustituir-1)] = nombreAsustituir
    
    console.log(pasajeroAsustituir)
    console.log(nombreAsustituir)
    console.log(pasajeros)
}