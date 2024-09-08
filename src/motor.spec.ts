//import { vi } from 'vitest';
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
} from './motor';
import { ValidacionClave } from './model';
//import { mostrarTexto } from './ui';

describe('tieneMayusculasYMinusculas', () => {
  it('deberia devolver throw si las entradas son undefined', () => {
    // Arrange
    const clave: any = undefined;
    // Act
    const result = () => tieneMayusculasYMinusculas(clave);
    // Assert
    expect(result).toThrowError('No se ha definido una clave');
  });
  it('deberia devolver throw si las entradas son null', () => {
    // Arrange
    const clave: any = null;
    // Act
    const result = () => tieneMayusculasYMinusculas(clave);
    // Assert
    expect(result).toThrowError('No se ha definido una clave');
  });
  it('deberia devolver true si tiene mayusculas y minusculas', () => {
    // Arrange
    const clave: string = 'StrinG';
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
      error: '',
    };
    // Act
    const result = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(result).toEqual(resultadoEsperado);
  });
  /* it('deberia devolver error si no tiene mayusculas', () => {
    // Arrange
    const clave: string = 'string';
    vi.spyOn(global, 'mostrarTexto').mockReturnValue(
      'La clave debe tener mayúsculas y minúsculas'
    );
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: 'La clave debe tener mayúsculas y minúsculas',
    };

    // Act
    const result = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(result).toEqual(resultadoEsperado);
    // Restaurar la implementación original
    spy.mockRestore();
  }); */
});

describe('tieneNumeros', () => {
  it('deberia devolver throw si las entradas son undefined', () => {
    // Arrange
    const clave: any = undefined;
    // Act
    const result = () => tieneNumeros(clave);
    // Assert
    expect(result).toThrowError('No se ha definido una clave');
  });
  it('deberia devolver throw si las entradas son null', () => {
    // Arrange
    const clave: any = null;
    // Act
    const result = () => tieneNumeros(clave);
    // Assert
    expect(result).toThrowError('No se ha definido una clave');
  });
});

describe('tieneCaracteresEspeciales', () => {
  it('deberia devolver throw si las entradas son undefined', () => {
    // Arrange
    const clave: any = undefined;
    // Act
    const result = () => tieneCaracteresEspeciales(clave);
    // Assert
    expect(result).toThrowError('No se ha definido una clave');
  });
  it('deberia devolver throw si las entradas son null', () => {
    // Arrange
    const clave: any = null;
    // Act
    const result = () => tieneCaracteresEspeciales(clave);
    // Assert
    expect(result).toThrowError('No se ha definido una clave');
  });
});
