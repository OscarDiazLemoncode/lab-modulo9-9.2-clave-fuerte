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
  return tieneMayusculas === true && tieneMinusculas === true
    ? {
        esValida: true,
        error: limpiarTextoError(),
      }
    : {
        esValida: false,
        error: mostrarTextoError(textoError),
      };
};

// La clave debe de tener números.
export const tieneNumeros = (clave: string): ValidacionClave => {
  const textoError = 'La clave debe de tener números';
  const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const tieneNumeros = clave
    .split('')
    .some((elemento) => numeros.includes(elemento));
  return tieneNumeros
    ? { esValida: true, error: limpiarTextoError() }
    : {
        esValida: false,
        error: mostrarTextoError(textoError),
      };
};

// La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const textoError = 'La clave debe de tener caracteres especiales';
  const caracteresEspeciales = " !@#$%^&*()_+[]{}|;:',.<>?/~`-=";
  console.log(caracteresEspeciales.length);
  const tieneCaracteresEsp = clave
    .split('')
    .some((elemento) => caracteresEspeciales.includes(elemento));
  return tieneCaracteresEsp
    ? { esValida: true, error: limpiarTextoError() }
    : {
        esValida: false,
        error: mostrarTextoError(textoError),
      };
};
