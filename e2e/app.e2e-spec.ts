import { MaterialDesignDemo2Page } from './app.po';

describe('material-design-demo-2 App', function() {
  let page: MaterialDesignDemo2Page;

  beforeEach(() => {
    page = new MaterialDesignDemo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
