import { PrezAppPage } from './app.po';

describe('prez-app App', function() {
  let page: PrezAppPage;

  beforeEach(() => {
    page = new PrezAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
