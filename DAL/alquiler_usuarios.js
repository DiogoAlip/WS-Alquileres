import { maquinarias } from "./alquiler_usuarios_DB.js";
import { alquileres } from "./alquiler_usuarios_DB.js";

export const UsuarioAlquiler = {
  listarMaquinarias: () => [...maquinarias],
  listarAlquileres: () =>
    alquileres.map((alquiler) => ({
      ...alquiler,
      NombreMaquinas: alquiler.maquinarias.map((maquina) => maquina.nombre),
      IdMaquinas: alquiler.maquinarias.map((maquina) => maquina.id),
    })),
  buscarMaquinaPorId: (id) => {
    const maquina = maquinarias.findIndex((maquina) => maquina.id == id);
    if (maquina < 0) {
      return "NO ENCONTRADA";
    }
    return maquinarias[maquina].disponible
      ? maquinarias[maquina]
      : "NO DISPONIBLE";
  },
  buscarMaquinaPorNombre: (nombre) => {
    const maquina = maquinarias.findIndex(
      (maquina) => maquina.nombre == nombre
    );
    if (maquina < 0) {
      return "NO ENCONTRADA";
    }
    return maquinarias[maquina].disponible
      ? maquinarias[maquina]
      : "NO DISPONIBLE";
  },
  guardarNuevoAlquiler: (nuevaMaquina) => {
    maquinarias.shift(nuevaMaquina);
  },
};
