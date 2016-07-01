export class MicropostsUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mp-root h1')).getText();
  }
}
