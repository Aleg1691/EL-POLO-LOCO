const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
    ],
    [
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 0, 0),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 200, 1),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 400, 1),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 600, 0),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 800, 0),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1000, 1),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 1200, 0),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1400, 1),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 1600, 0),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1800, 1),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 2000, 0),
    ],
);