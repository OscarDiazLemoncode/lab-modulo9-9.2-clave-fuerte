import { ValidacionClave } from './model';
import { mostrarTexto, limpiarTextoError } from './ui';

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
  const textoError = 'La clave debe tener mayúsculas y minúsculas';
  if (clave !== null && clave !== undefined) {
    // Verificamos si tiene mayusculas
    const tieneMayusculas = clave
      .split('')
      .some((letra) => letra === letra.toUpperCase());
    // Verificamos si tiene minusculas
    const tieneMinusculas = clave
      .split('')
      .some((letra) => letra === letra.toLowerCase());
    if (tieneMayusculas && tieneMinusculas) {
      return {
        esValida: true,
        error: '',
      };
    } else {
      return {
        esValida: false,
        //error: mostrarTexto(textoError),
        error: mostrarTexto(textoError),
      };
    }
  }
  throw new Error('No se ha definido una clave');

  /* // Verificamos si tiene mayusculas
  const tieneMayusculas = clave
    .split('')
    .some((letra) => letra === letra.toUpperCase());
  // Verificamos si tiene minusculas
  const tieneMinusculas = clave
    .split('')
    .some((letra) => letra === letra.toLowerCase());
  return tieneMayusculas && tieneMinusculas
    ? {
        esValida: true,
        error: '',
      }
    : {
        esValida: false,
        error: mostrarTexto(textoError),
      }; */
};

// La clave debe de tener números.
export const tieneNumeros = (clave: string): ValidacionClave => {
  const textoError = 'La clave debe de tener números';
  const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (clave !== null && clave !== undefined) {
    const tieneNumeros = clave
      .split('')
      .some((elemento) => numeros.includes(elemento));
    if (tieneNumeros) {
      return { esValida: true, error: '' };
    } else {
    }
    return {
      esValida: false,
      error: mostrarTexto(textoError),
    };
  }
  throw new Error('No se ha definido una clave');
  /* const tieneNumeros = clave
    .split('')
    .some((elemento) => numeros.includes(elemento));
  return tieneNumeros
    ? { esValida: true, error: '' }
    : {
        esValida: false,
        error: mostrarTexto(textoError),
      }; */
};

// La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const textoError = 'La clave debe de tener caracteres especiales';
  const caracteresEspeciales = " !@#$%^&*()_+[]{}|;:',.<>?/~`-=";
  if (clave !== null && clave !== undefined) {
    const tieneCaracteresEsp = clave
      .split('')
      .some((elemento) => caracteresEspeciales.includes(elemento));
    if (tieneCaracteresEsp) {
      return { esValida: true, error: '' };
    } else {
      return {
        esValida: false,
        error: mostrarTexto(textoError),
      };
    }
  }
  throw new Error('No se ha definido una clave');
};

// La clave no debe tener el nombre del usuario.
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const textoError = 'La clave no debe tener el nombre del usuario';
  return clave !== nombreUsuario ||
    clave.toLowerCase() !== nombreUsuario.toLowerCase() ||
    clave.toUpperCase() !== nombreUsuario.toUpperCase()
    ? {
        esValida: true,
        error: '',
      }
    : { esValida: false, error: mostrarTexto(textoError) };
};

// La clave no debe de contener palabras comunes
export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const textoError = 'La clave no debe de contener palabras comunes';
  const palabrasComunes = commonPasswords.includes(clave);
  return !palabrasComunes
    ? {
        esValida: true,
        error: '',
      }
    : {
        esValida: false,
        error: mostrarTexto(textoError),
      };
};
// La clave debe de tener una longitud mínima de 8 caracteres.
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  const textoError =
    'La clave debe de tener una longitud mínima de 8 caracteres';
  return clave.length > 8
    ? { esValida: true, error: '' }
    : {
        esValida: false,
        error: mostrarTexto(textoError),
      };
};

// Estilo input clave validada
const campoValido = (): void => {
  const input = document.querySelector('#input_password');
  const mensaje = document.querySelector('.mensaje');
  const texto = 'La clave es válida';
  if (
    input !== null &&
    input !== undefined &&
    input instanceof HTMLInputElement &&
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement
  ) {
    mostrarTexto(texto);
  }
};

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const nombre = tieneNombreUsuario(nombreUsuario, clave);
  if (!nombre.esValida) {
    return { esValida: false, error: nombre.error };
  }

  const palabras = tienePalabrasComunes(clave, commonPasswords);
  if (!palabras.esValida) {
    return { esValida: false, error: palabras.error };
  }

  const mayusculasMinusculas = tieneMayusculasYMinusculas(clave);
  if (!mayusculasMinusculas.esValida) {
    return { esValida: false, error: mayusculasMinusculas.error };
  }

  const numeros = tieneNumeros(clave);
  if (!numeros.esValida) {
    return { esValida: false, error: numeros.error };
  }

  const caracteres = tieneCaracteresEspeciales(clave);
  if (!caracteres.esValida) {
    return { esValida: false, error: caracteres.error };
  }

  const longitudMinima = tieneLongitudMinima(clave);
  if (!longitudMinima.esValida) {
    return { esValida: false, error: longitudMinima.error };
  }
  limpiarTextoError();
  campoValido();
  return { esValida: true };
};
