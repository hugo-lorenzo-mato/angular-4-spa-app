import { A4SPAAPPPage } from './app.po';

describe('a4-spa-app App', () => {
  let page: A4SPAAPPPage;

  beforeEach(() => {
    page = new A4SPAAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
