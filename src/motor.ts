import { /* commonPasswords, */ ValidacionClave } from './model';
import { mostrarTextoError, limpiarTextoError } from './ui';

// Obtener value del input
export const valorInput = (): string => {
  const input = document.querySelector('#input_password');
  if (
    input !== null &&
    input !== undefined &&
    input instanceof HTMLInputElement
  ) {
    return input.value;
  }
  throw new Error('No se ha definido una entrada en el input');
};

// Valida que la clave tenga mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const textoError = 'La clave debe de tener mayúsculas y minúsculas';

  // Verificamos si tiene mayusculas
  const tieneMayusculas = clave
    .split('')
    .some((letra) => letra === letra.toUpperCase());
  // Verificamos si tiene minusculas
  const tieneMinusculas = clave
    .split('')
    .some((letra) => letra === letra.toLowerCase());
  if (tieneMayusculas === true && tieneMinusculas === true) {
    return {
      esValida: true,
      error: limpiarTextoError(),
    };
  } else {
    return {
      esValida: false,
      error: mostrarTextoError(textoError),
    };
  }
};
/* // Muestra mensaje de errores
export const mostrarTextoError = (texto: string) => {
  const mensaje = document.querySelector('.mensaje');
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement
  ) {
    console.log((mensaje.textContent = texto));
    return (mensaje.textContent = texto);
  }
  throw new Error('No se muestra el texto del error');
}; */
