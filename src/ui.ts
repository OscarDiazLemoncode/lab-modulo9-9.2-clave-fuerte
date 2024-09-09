import { valorInputNombre, valorInputContraseña, validarClave } from './motor';
import { commonPasswords } from './model';

// Muestra mensaje de errores
export const mostrarTexto = (texto: string): string => {
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
export const limpiarTextoError = (): string => {
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
  // Cambios en el input de contraseña
  const nombreUsuario = document.querySelector('#nombre_usuario');
  const inputContraseña = document.querySelector('#input_password');
  if (
    nombreUsuario !== null &&
    nombreUsuario !== undefined &&
    nombreUsuario instanceof HTMLInputElement &&
    inputContraseña !== null &&
    inputContraseña !== undefined &&
    inputContraseña instanceof HTMLInputElement
  ) {
    nombreUsuario.addEventListener('change', () => {
      inputContraseña.removeAttribute('disabled');
    });
    inputContraseña.addEventListener('input', () => {
      const nombreUsuario = valorInputNombre();
      const clave = valorInputContraseña();
      validarClave(nombreUsuario, clave, commonPasswords);
      console.log(validarClave(nombreUsuario, clave, commonPasswords));
    });
  }
};
