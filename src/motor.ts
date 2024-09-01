import { ValidacionClave } from './model';
import { mostrarTextoError /* , limpiarTextoError */ } from './ui';

// Obtener value del input nombre
export const valorInputNombre = (): string => {
  const nombre = document.querySelector('#nombre_usuario');
  if (
    nombre !== null &&
    nombre !== undefined &&
    nombre instanceof HTMLInputElement
  ) {
    return nombre.value;
  }
  throw new Error('No se ha definido una entrada en el input nombre');
};
// Obtener value del input contraseña
export const valorInputContraseña = (): string => {
  const input = document.querySelector('#input_password');
  if (
    input !== null &&
    input !== undefined &&
    input instanceof HTMLInputElement
  ) {
    return input.value;
  }
  throw new Error('No se ha definido una entrada para el input de contraseña');
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
        error: '',
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
    ? { esValida: true, error: '' }
    : {
        esValida: false,
        error: mostrarTextoError(textoError),
      };
};

// La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const textoError = 'La clave debe de tener caracteres especiales';
  const caracteresEspeciales = " !@#$%^&*()_+[]{}|;:',.<>?/~`-=";
  const tieneCaracteresEsp = clave
    .split('')
    .some((elemento) => caracteresEspeciales.includes(elemento));
  return tieneCaracteresEsp
    ? { esValida: true, error: '' }
    : {
        esValida: false,
        error: mostrarTextoError(textoError),
      };
};

// La clave debe de tener una longitud mínima de 8 caracteres.
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  const textoError =
    'La clave debe de tener una longitud mínima de 8 caracteres';
  const tieneMasDe8Caracteres = clave.length;
  return tieneMasDe8Caracteres >= 8
    ? { esValida: true, error: '' }
    : {
        esValida: false,
        error: mostrarTextoError(textoError),
      };
};

// La clave no debe tener el nombre del usuario.
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const textoError = 'La clave no debe tener el nombre del usuario';

  return clave === nombreUsuario ||
    clave.toLowerCase() === nombreUsuario.toLowerCase() ||
    clave.toUpperCase() === nombreUsuario.toUpperCase()
    ? { esValida: false, error: mostrarTextoError(textoError) }
    : {
        esValida: true,
        error: '',
      };
};

// La clave no debe de contener palabras comunes
export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): any => {
  const textoError = 'La clave no debe de contener palabras comunes';

  const palabrasComunes = commonPasswords.some((palabra) =>
    clave.includes(palabra)
  );
  return palabrasComunes
    ? { esValida: false, error: mostrarTextoError(textoError) }
    : {
        esValida: true,
        error: '',
      };
};
