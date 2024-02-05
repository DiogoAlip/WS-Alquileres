import { AlquilerServicios } from "./Alquiler_Servicios.js";
//import { message_users } from "../DAL/messages_users_DB.js";

let socket = io();

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const dni = document.getElementById("dni");
const monto = document.getElementById("monto");
const maquina = document.getElementById("maquina");
const button = document.getElementById("submit");

button.addEventListener("submit", (e) => {
  e.preventDefault();
  if (typeof AlquilerServicios.buscarMaquina(maquina.value) == "string") {
    window.alert(`La maquina con nombre/id ${maquina.value} no se encontro`);
    maquina.focus();
    return;
  }
  const nuevoAlquiler = {
    DNI: dni.value,
    nombre: nombre.value,
    apellido: apellido.value,
    pago: monto.value,
    maquina: maquina.value,
  };

  AlquilerServicios.guardarNuevoAlquiler(nuevoAlquiler);
});
