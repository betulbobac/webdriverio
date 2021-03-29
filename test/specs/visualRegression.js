const MainPage = require('../pageobjects/main.page');
const CarSafetyPage = require('../pageobjects/carSafety.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Million More page visual testing', () => {
   beforeEach(() => {
      MainPage.open();
      MainPage.acceptCookie();
   });
 
   it('should save some screenshots', () => {
     // Save a screen
     browser.saveScreen('examplePaged', { /* some options */ });
 
     // Save an element
     browser.saveElement(MainPage.volvoLogo), 'Volvo Logo Element', { /* some options */ };
 
     // Save a full page screenshot
     browser.saveFullPageScreen('fullPage', { /* some options */ });
 
     
   });

   it('should compare successful with a baseline', () => {
      // Check a screen
      expect(browser.checkScreen('examplePaged', { /* some options */ })).toEqual(0);
  
      // Check an element
      expect(browser.checkElement(MainPage.volvoLogo, 'Volvo Logo Element', { /* some options */ })).toEqual(0);
  
      // Check a full page screenshot
      expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0);
  
      
    });
})




