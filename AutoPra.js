const Objekt1 = require('./Objekt1');
const objekt1 = require('./Objekt1');

describe ('Kupowanie', () => {
    it ('Kupowanie', () => {
        browser.url('http://automationpractice.com/index.php');
        browser.pause(500);

        Objekt1.szukajkaButton('dress');
        //dress mozna wpisac tutaj z rąsi albo w karcie Obiekt1 zdefiniowac bezposrednio zamiast value
        //moze byc tutaj kilka wartosci do wpisywania
        Objekt1.lupkaButton();
        Objekt1.dressButton();
        Objekt1.dodajButton();
        

    })
}) 