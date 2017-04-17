import { ExtendedTodoListPage } from './app.po';

describe('extended-todo-list App', () => {
  let page: ExtendedTodoListPage;

  beforeEach(() => {
    page = new ExtendedTodoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
