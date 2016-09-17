import { PeteClodiComPage } from './app.po';

describe('PeteClodi.com App', function() {
  let page: PeteClodiComPage;

  beforeEach(() => {
    page = new PeteClodiComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('PeteClodi.com works!');
  });
});
