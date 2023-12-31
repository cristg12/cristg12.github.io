function getMiPromesa() {
    const funct = (resolve, reject) => {
      const confirmResult = 3;
  
      if (confirmResult === 2) {
        resolve("Este es el valor final");
      } else {
        reject("Se cancelo la operacion");
      }
    }
  
    return new Promise(funct);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // promise
    console.log("primero");
    miPromise = getMiPromesa();
    miPromise
      .then((valor) => {
        console.log(valor);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(miPromise);
    console.log("tercero");
  
    // fetch
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const responsePromise = fetch(url);
  
    responsePromise
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });