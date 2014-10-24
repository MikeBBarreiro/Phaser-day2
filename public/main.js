// var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
//
// function preload() {
//
//     game.load.spritesheet('button', 'img/button_sprite_sheet.png', 193, 71);
//     game.load.image('background','img/starfield.png');
//
//
// }
//
// var button;
// var background;
//
// function create() {
// //sets the backgtound color of the body behind theimage
//     game.stage.backgroundColor = '#F53F49';
// // tileSprite repeats the image so it takes up the whole page!
//     background = game.add.tileSprite(0, 0, 800, 600, 'background');
// //this is the actual over out and down method---------------------this sprite images------v--v--v
//     button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);
//
//     button.onInputOver.add(over, this);
//     button.onInputOut.add(out, this);
//
// }
//
// function over() {
//     console.log('button over');
// }
//
// function out() {
//     console.log('button out');
// }
//
// function actionOnClick () {
//
//     background.visible =! background.visible;
//
// }
