const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     * Sample alert handling
     */
    get flashAlert () { return $('#flash') }
}

module.exports = new SecurePage();
