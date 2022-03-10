/* import { MedicosComponent } from './medicos.component';
import { MedicosService} from './medicos.service';
import {from, EMPTY, throwError} from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';


class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  let servicio: MedicosService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        servicio,{
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    servicio = TestBed.get(MedicosService)
    componente = new MedicosComponent(servicio);
  });
  it('should create', () => {
    expect(servicio).toBeTruthy();
  });

  it('Init: Debe de cargar los médicos', () => {

    const medicos = ['medico1', 'Medico2', 'Medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);

  });

  it('Debe de llamar al servidor para agregar un médico', () => {

    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return EMPTY;
    });
    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();

  });

 it('Debe de agregar un nuevo médido al arreglo de Médicos', () => {

    const medico = {id: 1, nombre: 'David'};

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

  });
    it('Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar el médico';
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);
  });

      it('Debe de llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');

  });

  it('NO Debe de llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });


});
 */
