import {
  valorInput,
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
} from './motor';

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

// Muestra mensaje de errores
export const limpiarTextoError = () => {
  const mensaje = document.querySelector('.mensaje');
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement
  ) {
    return (mensaje.textContent = '');
  }
  throw new Error('No se muestra el texto del error');
};

// Eventos
export const eventos = () => {
  // Cambios en el input de entrada
  const input = document.querySelector('#input_password');
  if (
    input !== null &&
    input !== undefined &&
    input instanceof HTMLInputElement
  ) {
    input.addEventListener('input', () => {
      const clave = valorInput();
      console.log(tieneMayusculasYMinusculas(clave));
      console.log(tieneNumeros(clave));
      console.log(tieneCaracteresEspeciales(clave));
    });
  }
};
