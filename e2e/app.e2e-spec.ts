import { Dreams2Page } from './app.po';

describe('dreams2 App', function() {
  let page: Dreams2Page;

  beforeEach(() => {
    page = new Dreams2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
