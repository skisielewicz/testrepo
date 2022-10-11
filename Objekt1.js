class objekt1 {
    get szukajka () {return $('/html[1]/body[1]/div[1]/div[1]/header[1]/div[3]/div[1]/div[1]/div[2]/form[1]/input[4]')};
    get dress () {return $('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[2]/ul[1]/li[2]/div[1]/div[2]/h5[1]/a[1]')};
    get dodaj () {return $('/html[1]/body[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[4]/form[1]/div[1]/div[3]/div[1]/p[1]/button[1]/span[1]')};
    get kontynuuj () {return $('/html[1]/body[1]/div[1]/div[1]/header[1]/div[3]/div[1]/div[1]/div[4]/div[1]/div[2]/div[4]/span[1]/span[1]')};
    get lupka () {return $('/html[1]/body[1]/div[1]/div[1]/header[1]/div[3]/div[1]/div[1]/div[2]/form[1]/button[1]')}



    szukajkaButton(value) {
        this.szukajka.click();
        this.szukajka.addValue(value);
    };

    dressButton () {
        this.dress.click();
    };

    dodajButton () {
        this.dodaj.click()
    };

    lupkaButton () {
        this.lupka.click()
    };

    kontynuujButton () {
        this.kontynuuj.click()
    }
}

module.exports = new objekt1();