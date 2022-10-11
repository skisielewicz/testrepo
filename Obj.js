class Interia {
    get menu() {return $('/html[1]/body[1]/div[2]/div[4]/div[2]/header[1]/nav[1]/ul[1]/li[6]/a[1]')}
    get gry() {return $('/html[1]/body[1]/nav[1]/ul[1]/li[3]/ul[1]/li[4]/a[1]')}
    get plansz () {return $('/html[1]/body[1]/div[3]/header[1]/div[1]/div[2]/nav[1]/ul[1]/li[9]/a[1]')} 

menuButton() {
    this.menu.click();
}

gryButton(){
    this.gry.click();
}

planszButton(){
    this.plansz.click();
}



}

module.exports = new Interia();
