
const MainPage = require('../pageobjects/main.page');
const SecurePage = require('../pageobjects/secure.page');

describe('experitest.com page', () => { 
    it('should have the right title', () => { 
        MainPage.open();
        MainPage.acceptCookie();
        expect(browser).toHaveTitle('A million more | Volvo Cars'); 
         
    }) 

    it('should have the right logo at top left corner', () => { 
         expect(MainPage.volvoLogo).toExist();
    }) 

    it('should have the main text', () => { 
        expect(MainPage.mainText).toHaveText('Ideas that change the world are often the most controversial.')
    }) 

   it('should have the video auto plays inline', () => { 
    expect(MainPage.autoPlayVideo).toBeDisplayed();

   }) 

   it('should have the text under main video A million more', () => { 
    expect(MainPage.textUnderVideo).toHaveText('With new and existing safety features, we are determined to save a million more lives.');
   }) 

   it('should have the button clickable WATCH THE STORY', () => { 
    MainPage.watchStory.click();
    

   }) 

   it('should have the Amy video', () => { 
    expect(MainPage.amyVideo).toBeExisting();

   }) 
   it('should have the Amy video clickable', () => { 
    MainPage.amyVideo.click();
    expect(MainPage.amyVideoAfterPlay).toBeExisting();
   }) 


})


