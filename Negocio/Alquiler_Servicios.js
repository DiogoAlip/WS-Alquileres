import { UsuarioAlquiler } from "./alquiler_usuarios.js";
export const AlquilerServicios = {
  getAlquileres: () => UsuarioAlquiler.listarAlquileres(),
  getMaquinarias: () => UsuarioAlquiler.listarMaquinarias(),
  buscarMaquina: (nombreOID) => {
    const porID = UsuarioAlquiler.buscarMaquinaPorID(nombreOID);
    const porNombre = UsuarioAlquiler.buscarMaquinaNombre(nombreOID);

    if (porID == "NO DISPONIBLE" || porNombre == "NO DISPONIBLE")
      return "NO DISPONIBLE";

    return typeof porID == "string" ? porNombre : porID;
  },
  guardarNuevoAlquiler: (nuevoAlquiler) => {
    UsuarioAlquiler.guardarNuevoAlquiler(nuevoAlquiler);
  },
};
