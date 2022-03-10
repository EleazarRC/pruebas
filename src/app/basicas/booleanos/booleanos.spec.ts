import { usuarioIngresado } from "./booleanos";


describe('Pruebas de buleanos', ()=> {


  it('Debe retornar true', () => {

    const resp = usuarioIngresado();

    expect( resp ).toBeTruthy();
    /* está la negación y el contrario
    expect( resp ).not.toBeFalse(); */

  } )

});
