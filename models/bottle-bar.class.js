class BottleBar extends DrawableObject {

    BOTTLE_IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    bottlepercentage = 0;

    constructor() {
        super();
        this.loadImages(this.BOTTLE_IMAGES);
        this.x = 30;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setBottlepercentage(0);
    }

    setBottlepercentage(bottlepercentage) {
        this.bottlepercentage = bottlepercentage;
        let path = this.BOTTLE_IMAGES[this.resolveBottleImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveBottleImageIndex() {
        if (this.bottlepercentage == 0) {
            return 0;
        } else if (this.bottlepercentage > 20) {
            return 1;
        } else if (this.bottlepercentage > 40) {
            return 2;
        } else if (this.bottlepercentage > 60) {
            return 3;
        } else if (this.bottlepercentage > 80) {
            return 4;
        } else {
            return 5;
        }
    }
}