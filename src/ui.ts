import { valorInputNombre, valorInputContraseña, validarClave } from './motor';
import { commonPasswords } from './model';
import noMostrarContrasena from './assets/closedeye.svg';
import mostrarContrasena from './assets/openeye.svg';

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
  const iconoMostrarOcultarContrasena = document.querySelector('.icon_password>img');
  const mensaje = document.querySelector('.mensaje');
  if (
    nombreUsuario !== null &&
    nombreUsuario !== undefined &&
    nombreUsuario instanceof HTMLInputElement &&
    inputContraseña !== null &&
    inputContraseña !== undefined &&
    inputContraseña instanceof HTMLInputElement &&
    iconoMostrarOcultarContrasena !== null &&
    iconoMostrarOcultarContrasena !== undefined &&
    iconoMostrarOcultarContrasena instanceof HTMLImageElement &&
    mensaje !== null && mensaje instanceof HTMLHeadingElement
  ) {
    nombreUsuario.addEventListener('input', () => {
      inputContraseña.removeAttribute('disabled');
      iconoMostrarOcultarContrasena.src = noMostrarContrasena;

      const nombreUsuario = valorInputNombre();
      const clave = valorInputContraseña();
      validarClave(nombreUsuario, clave, commonPasswords);
      
      
    });
    inputContraseña.addEventListener('input', () => {      
      const nombreUsuario = valorInputNombre();
      const clave = valorInputContraseña();
      const claveValida = validarClave(nombreUsuario, clave, commonPasswords);
      claveValida.esValida ? mensaje.classList.add('valid_format'): mensaje.classList.remove('valid_format');
    });
    
    iconoMostrarOcultarContrasena.addEventListener('click', ()=>{
      if(!iconoMostrarOcultarContrasena.src.includes(mostrarContrasena)){
        iconoMostrarOcultarContrasena.src = mostrarContrasena;
        inputContraseña.type ="text";
      }else{
        iconoMostrarOcultarContrasena.src = noMostrarContrasena;        
        inputContraseña.type ="password";
      }
      
    });   
    
  }
  
};




