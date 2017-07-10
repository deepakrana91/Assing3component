import { Assing3componentPage } from './app.po';

describe('assing3component App', () => {
  let page: Assing3componentPage;

  beforeEach(() => {
    page = new Assing3componentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
