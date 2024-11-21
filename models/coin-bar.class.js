class CoinBar extends DrawableObject {


    COIN_IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    coinpercentage = 0;

    constructor() {
        super();
        this.loadImages(this.COIN_IMAGES);
        this.x = 30;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.setCoinpercentage(0);
    }

    setCoinpercentage(coinpercentage) {
        this.coinpercentage = coinpercentage;
        let path = this.COIN_IMAGES[this.resolveCoinImageIndex()];
        this.img = this.imageCache[path];
    }




    resolveCoinImageIndex() {
        if (this.coinpercentage == 0) {
            return 0;
        } else if (this.coinpercentage > 20) {
            return 1;
        } else if (this.coinpercentage > 40) {
            return 2;
        } else if (this.coinpercentage > 60) {
            return 3;
        } else if (this.coinpercentage > 80) {
            return 4;
        } else {
            return 5;
        }
    }
}