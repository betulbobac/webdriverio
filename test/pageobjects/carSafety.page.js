const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CarSafetyPage extends Page {
  
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
      return super.open('car-safety');
    }

    get mainTitle(){
      return $('#ModelIntro-1 > section > h2');
    }

}

module.exports = new CarSafetyPage();
