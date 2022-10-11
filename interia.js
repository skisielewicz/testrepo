const Interia = require('./Obj.js');

describe('Majonez', () => {
    it('Majonez', () => {
        browser.url('https://www.interia.pl');
        browser.setWindowSize(1920, 1080);
        //browser.maximizeWindow()
        browser.pause(500);
        //$('document.querySelector(".rodo-popup-agree")').click();
        $('/html[1]/body[1]/div[6]/div[2]/button[3]').click();
        Interia.menuButton();
        //document.querySelector("body > div.rodo-popup > div.rodo-popup-buttons > button.rodo-popup-agree").click()
        browser.pause(5000);
        Interia.gryButton();
        browser.pause(5000);
        Interia.planszButton();
        browser.pause(5000);

    });





});