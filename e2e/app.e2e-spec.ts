import { HarMacenKommetPage } from './app.po';

describe('har-macen-kommet App', function() {
  let page: HarMacenKommetPage;

  beforeEach(() => {
    page = new HarMacenKommetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
