import { ChatLuccaPage } from './app.po';

describe('chat-lucca App', function() {
  let page: ChatLuccaPage;

  beforeEach(() => {
    page = new ChatLuccaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
