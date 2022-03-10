import { Jugador } from './clases';



describe( 'Pruebas de clases', () => {

  let jugador = new Jugador();
  // Ojo todas las pruebas se harán con esta instancia!!!

  beforeAll( () => {
   /*  console.log('beforeAll'); */

  })
  beforeEach( () => {
    /* console.log('beforeEach'); */
    //jugador.hp = 100;
    jugador = new Jugador();
  })
  afterAll( () => {
    /* console.log('afterAll'); */

  })
  afterEach( () => {
   /*  console.log('afterEach'); */

  })




  it( 'Debe de retornar 80 de hp, si recibe 20 de daño', () => {

    /* const jugador = new Jugador(); */
    const resp = jugador.recibeDanio(20);

    expect( resp ).toBe( 80 );

  });

  it( 'Debe de retornar 50 de hp, si recibe 50 de daño', () => {

   /*  const jugador = new Jugador(); */
    const resp = jugador.recibeDanio(50);

    expect( resp ).toBe( 50 );

  });


  it( 'Debe de retornar 00 de hp, si recibe 100 de daño', () => {

    /*  const jugador = new Jugador(); */
     const resp = jugador.recibeDanio(100);

     expect( resp ).toBe( 0 );

   });


   it( 'Debe de retornar 0 de hp, si recibe 100 o más', () => {

    /*  const jugador = new Jugador(); */
     const resp = jugador.recibeDanio(101);

     expect( resp ).toBe( 0 );

   });

});
