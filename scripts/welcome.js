const messageDiv = document.getElementById("wellcome-message");
let ip= localStorage.getItem("ip")
let lastVisit = localStorage.getItem("last-visit");
lastVisit = lastVisit? lastVisit: 0;
console.log('Last:  ', lastVisit);

document.addEventListener("DOMContentLoaded", async() => {
  const url= "https:api.ipify.org/?format=json";

  // Obtener fecha
  const currentTimestamp = Date.now();
  console.log('Current: ', currentTimestamp);
  const dateDifference= currentTimestamp -+ lastVisit;
  console.log("Diference: ", dateDifference);

  // Validar que sea mayor al dia actual
  if(!ip || dateDifference>10000){
    // hacer fetch a “https://api.ipify.org/?format=json”.
    const response= await fetch(url);
    console.log(response);

    // Obtener ip de la respuesta
    const miip= await response.json();
    console.log(miip);

    // Guardar ip en local storage
    ip= miip.ip;
    localStorage.setItem('ip', ip);
}
  

  // ajustar mensaje renderizado
  messageDiv.innerHTML = `
    <h2> Hola, ${miip.ip}. Bienvenido a mi web! </h2>
  `;
});
