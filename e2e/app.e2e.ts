import { PeteClodiComPage } from './app.po';

describe('peteclodi.com App', function() {
  let page: PeteClodiComPage;

  beforeEach(() => {
    page = new PeteClodiComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('peteclodi.com works!');
  });
});
