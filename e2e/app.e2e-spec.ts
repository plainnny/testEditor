import { TestEditorPage } from './app.po';

describe('test-editor App', () => {
  let page: TestEditorPage;

  beforeEach(() => {
    page = new TestEditorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
