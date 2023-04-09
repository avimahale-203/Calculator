import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.card-header')).getText() as Promise<string>;
  }

  inputElements(){
    element(by.id('number1')).sendKeys(6);
    element(by.id('number2')).sendKeys(2);
  }

  getResult(){
    return element(by.css('.result')).getText();
  }
}
