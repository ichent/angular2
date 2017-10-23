import { ClientsPage } from './app.po';

describe('clients App', () => {
  let page: ClientsPage;

  beforeEach(() => {
    page = new ClientsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
