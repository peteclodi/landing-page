import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PeteClodiComAppComponent } from '../app/peteclodi.com.component';

beforeEachProviders(() => [PeteClodiComAppComponent]);

describe('App: PeteClodiCom', () => {
  it('should create the app',
      inject([PeteClodiComAppComponent], (app: PeteClodiComAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'peteclodi.com works!\'',
      inject([PeteClodiComAppComponent], (app: PeteClodiComAppComponent) => {
    expect(app.title).toEqual('peteclodi.com works!');
  }));
});
