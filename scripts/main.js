// Definir la estructura del objeto auto
function Auto(modelo, marca, color, precio, disponible) {
  this.modelo = modelo;
  this.marca = marca;
  this.color = color;
  this.precio = precio;
  this.disponible = disponible;
}

// Crear un array de objetos autos disponibles
const autosDisponibles = [
  new Auto('Golf', 'Volkswagen', 'Blanco', 50, true),
  new Auto('Civic', 'Honda', 'Negro', 70, true),
  new Auto('Corolla', 'Toyota', 'Rojo', 60, true),
  new Auto('Spark', 'Chevrolet', 'Azul', 40, true)
];

// Función para agregar un nuevo auto al array de autos disponibles
function agregarAuto() {
  const modelo = prompt('Ingrese el modelo del auto:');
  const marca = prompt('Ingrese la marca del auto:');
  const color = prompt('Ingrese el color del auto:');
  const precio = Number(prompt('Ingrese el precio del alquiler por día:'));

  const nuevoAuto = new Auto(modelo, marca, color, precio, true);
  autosDisponibles.push(nuevoAuto);

  alert("El auto" + modelo + " " + marca + " ha sido agregado correctamente.");
}

// Función para buscar autos disponibles por modelo o marca
function buscarAuto() {
  const filtro = prompt('Ingrese el modelo o marca del auto que desea buscar:');
  const resultadoBusqueda = autosDisponibles.filter(auto => {
    return auto.modelo.toLowerCase().includes(filtro.toLowerCase()) || auto.marca.toLowerCase().includes(filtro.toLowerCase());
  });
  let mensaje = '';
  if (resultadoBusqueda.length === 0) {
    mensaje = 'No se encontraron autos disponibles con el modelo o marca especificados.';
  } else {
    mensaje = 'Autos disponibles:';
    resultadoBusqueda.forEach(auto => {
      mensaje += ` \n - ${auto.modelo} ${auto.marca}, color ${auto.color}, precio por día: $${auto.precio}`;
    });
  }
  alert(mensaje);
}

// Función para calcular el precio total del alquiler de un auto
function calcularPrecioTotal(auto, dias) {
  return auto.precio * dias;
}

// Función para alquilar un auto
function alquilarAuto() {
  const filtro = prompt('Ingrese el modelo o marca del auto que desea alquilar:');
  const resultadoBusqueda = autosDisponibles.filter(auto => {
    return auto.modelo.toLowerCase().includes(filtro.toLowerCase()) || auto.marca.toLowerCase().includes(filtro.toLowerCase());
  });
  let autoSeleccionado;
  if (resultadoBusqueda.length === 0) {
    alert('No se encontraron autos disponibles con el modelo o marca especificados.');
  } else {
    autoSeleccionado = resultadoBusqueda[0];
    const dias = Number(prompt("Ingrese la cantidad de días que desea alquilar el auto" + autoSeleccionado.modelo + " " + autoSeleccionado.marca + ":"));
    const precioTotal = calcularPrecioTotal(autoSeleccionado, dias)
    alert("El precio total por el alquiler del auto" + autoSeleccionado.modelo + " " + autoSeleccionado.marca + " por " + dias + " días es:$" + precioTotal);
    autoSeleccionado.disponible = false;
  }
}



function mostrarOpciones() {
  let opcion = "";
  while (opcion !== "4") {
    opcion = prompt(`Seleccione una opción:
  1. Agregar un auto
  2. Calcular costo
  3. Alquilar un auto
  4. Buscar un auto
  5. Salir`);
    switch (opcion) {
      case "1":
        agregarAuto();
        break;
      case "2":
        calcularPrecioTotal();
        break;
      case "3":
        alquilarAuto();
        break;
      case "4":
        buscarAuto();
        break;
      case "5":
        alert("Salir");
        break;
      default:
        alert("Opción no válida.");
        break;
    }
  }
}


