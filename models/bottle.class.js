class Bottle extends DrawableObject {

    IMAGES_BOTTLE_AMOUNT = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor(imagePath, x) {
        super(imagePath);
        this.loadImages(this.IMAGES_BOTTLE_AMOUNT);
        this.x = x;
        this.y = 360;
        this.width = 70;
        this.height = 70;
        this.collectedBottles = 0;
        this.setBottleNumber(this.collectedBottles);
    }

    setBottleNumber(collectedBottles) {
        this.collectedBottles = collectedBottles;
        let path = this.IMAGES_BOTTLE_AMOUNT[this.bottleIndex()];
        this.img = this.imageCache[path];
    }

    bottleIndex() {
        return Math.min(this.collectedBottles, this.IMAGES_BOTTLE_AMOUNT.length - 1);
    }

    collectBottle() {
        this.collectedBottles++;
        this.setBottleNumber(this.collectedBottles);
    }
}