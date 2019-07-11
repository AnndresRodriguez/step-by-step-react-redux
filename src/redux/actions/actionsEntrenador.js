export const AGREGAR_TITULAR = "AGREGAR_TITULAR";
export const AGREGAR_SUPLENTE = "AGREGAR_SUPLENTE";
export const QUITAR_TITULAR = "QUITAR_TITULAR";
export const QUITAR_SUPLENTE = "QUITAR_SUPLENTE";

export const agregarTitular = titular => {
  return {
    type: AGREGAR_TITULAR,
    payload: {
        titular
    }
  };
};

export const agregarSuplente = suplente => {
    return {
      type: AGREGAR_SUPLENTE,
      payload: {
        suplente
      }
    };
  };

export const quitarTitular = titular => {
    return {
      type: QUITAR_TITULAR,
      payload:{
        titular
      }
    };
};

export const quitarSuplente = suplente => {
    return {
      type: QUITAR_SUPLENTE,
      payload: {
        suplente
      }
    };
};
