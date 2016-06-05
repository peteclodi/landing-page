export class PeteClodiComPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('peteclodi-com-app h1')).getText();
  }
}
