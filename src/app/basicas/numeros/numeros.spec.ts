import { incrementar } from './numeros';



describe('Pruebas de números', ()=> {

  it('Debe de retornar 100, si el numero ingresado es mayor a 100', () => {

    const res = incrementar(300);

    expect( res ).toBe(100);

  });

  it('Debe de retornar el número +1', () => {

    const numero = 1;

    const res = incrementar( numero );

    expect( res ).toBe( numero + 1 );

  });

});
