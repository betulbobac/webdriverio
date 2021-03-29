const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
   
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
      return super.open('car-safety/a-million-more');
    }

    /**
     * return element selector for Volvo logo
     */
    get volvoLogo(){
      return $('//img[@alt="Volvo"]');
    }

    /**
     * return element selector for main text on page
     */
    get mainText(){
      return $('//*[@id="ModelIntro-1"]/section/h2');
    }

    /**
     * return element selector for auto play video inline
     */
    get autoPlayVideo(){
      return $('#Video-1 > section > div > button > div > video');
    }

    /**
     * return element selector for the text under video
     */
    get textUnderVideo(){
      return $('#TextStatement-1 > section > div > div > p > span.bd.ff.fg');
    }

    /**
     * return element selector for Amy's video
     */
    get amyVideo(){
      return $('#VideoTestimonials-1 > section > div > div.ay.bx.by.bz.f.hz.ia.ib.ic > div:nth-child(1) > div.a.ca.cl.ig.ih');
    }

    /**
     * return element selector for play button for Amy's video
     */
    get playAmyVideo(){
      return $('#VideoTestimonials-1 > section > div > div.ay.bx.by.bz.f.hz.ia.ib.ic > div:nth-child(1) > div.a.ca.cl.ig.ih > div > button > svg > path');
    }
    
    /**
     * return element selector after play button clicked of Amy's video
     */
    get amyVideoAfterPlay(){
      return $('#VideoTestimonials-1 > section > div > div.ay.bx.by.bz.f.hz.ia.ib.ic > div:nth-child(1) > div.a.ca.cl.ig.ih > div > video');
    }

    /**
     * return element selector for watch story
     */
    get watchStory(){
      return $('#Video-1 > section > div > button > div > video');
    }

    
    
}

module.exports = new MainPage();
