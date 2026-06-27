// Variables numéricas ingresadas por el usuario
const numero1 = parseInt(prompt("Ingrese un número"));
const numero2 = parseInt(prompt("Ingrese otro número"));

// Menú de opciones
let opcion = prompt(`
    Opciones disponibles:
      1. Suma
      2. Resta
      3. Multiplicación
      4. División
      5. Módulo (resto de una división)

    Ingrese el número correspondiente
  `);

// Control de flujo
switch (opcion) {
  case "1": 
    alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    break;
  case "2": 
    alert(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    break;
  case "3": 
    alert(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    break;
  case "4":
    if (numero2 == 0)
      alert("No se puede dividir por cero");
    else
      alert(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    break;
  case "5": 
    alert(`${numero1} % ${numero2} = ${numero1 % numero2}`);
    break;
  default:
    alert("opción no encontrada");
  
}