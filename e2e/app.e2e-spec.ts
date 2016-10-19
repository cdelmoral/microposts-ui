import { MicropostsUiPage } from './app.po';

describe('microposts-ui App', function() {
  let page: MicropostsUiPage;

  beforeEach(() => {
    page = new MicropostsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
