import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

fdescribe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Calculator as heading', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Calculator');
  });

  it('should add the two numbers once entered valid numbers', () => {
    page.navigateTo();
    page.inputElements();
    element(by.css('.btn-success')).click();
    expect(page.getResult()).toEqual('Result : 8.00');
  })

  it('should subsctract the second number from the first', () => {
    page.navigateTo();
    page.inputElements();
    element(by.css('.btn-primary')).click();
    expect(page.getResult()).toEqual('Result : 4.00');
  })

  it('should multiply the numbers', () => {
    page.navigateTo();
    page.inputElements();
    element(by.css('.btn-danger')).click();
    expect(page.getResult()).toEqual('Result : 12.00');
  })
  it('should divide the second number from the first', () => {
    page.navigateTo();
    page.inputElements();
    element(by.css('.btn-warning')).click();
    expect(page.getResult()).toEqual('Result : 3.00');
  })




  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
