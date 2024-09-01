import {
  valorInputNombre,
  valorInputContraseña,
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from './motor';
import { commonPasswords } from './model';

// Muestra mensaje de errores
export const mostrarTextoError = (texto: string): string => {
  const mensaje = document.querySelector('.mensaje');
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement
  ) {
    return (mensaje.textContent = texto);
  }
  throw new Error('No se muestra el texto del error');
};

// Limpia mensaje de errores
/* export const limpiarTextoError = () => {
  const mensaje = document.querySelector('.mensaje');
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement
  ) {
    return (mensaje.textContent = '');
  }
  throw new Error('No se muestra el texto del error');
}; */

// Eventos
export const eventos = () => {
  // Cambios en el input de contraseña
  const input = document.querySelector('#input_password');
  if (
    input !== null &&
    input !== undefined &&
    input instanceof HTMLInputElement
  ) {
    input.addEventListener('input', () => {
      const nombreUsuario = valorInputNombre();
      const clave = valorInputContraseña();
      console.log(tieneMayusculasYMinusculas(clave));
      console.log(tieneNumeros(clave));
      console.log(tieneCaracteresEspeciales(clave));
      console.log(tieneLongitudMinima(clave));
      console.log(tieneNombreUsuario(nombreUsuario, clave));
      console.log(tienePalabrasComunes(clave, commonPasswords));
    });
  }
};
