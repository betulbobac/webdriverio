const MainPage = require('../pageobjects/main.page');
const CarSafetyPage = require('../pageobjects/carSafety.page');
const SecurePage = require('../pageobjects/secure.page');
describe('Learn More About Car Safety', () => { 

   it('should have the correct title', () => { 
      CarSafetyPage.open();
      CarSafetyPage.acceptCookie();
      expect(browser).toHaveTitle('Car safety | Volvo Cars');
   }) 

   it('should have the correct section: Car safety', () => { 
     const text = $('#ModelIntro-1 > section > h2');
     expect(CarSafetyPage.mainTitle).toHaveText('Car safety');
     
     }) 

   
})


