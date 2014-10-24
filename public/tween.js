var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload(){

    game.load.image('sky',   'assets/skies/underwater1.png');
    game.load.image('car',   'assets/pics/supercars_parsec.png');
    game.load.image('smoke', 'assets/particles/rising-smoke.png');
    game.load.spritesheet('rain', 'assets/sprites/spinObj_01.png', 174, 174);
    game.load.spritesheet('bam', 'assets/sprites/sexplosion.png',38 ,38 );
    game.load.spritesheet('phaser', 'assets/tests/tween/phaser.png', 70, 90);

}

var car, smoke, emitter, bam;

function create(){
  //  To make the sprite move we need to enable Arcade Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

  game.add.sprite(0, 0, 'sky');
  car   = game.add.sprite(900, 400, 'car');
  smoke = game.add.sprite(1070, 330, 'smoke');
  bam   = game.add.sprite(1070, 330, 'smoke');
  smoke.angle = 82


  car.anchor.setTo(0.5,0.5);
  car.scale.setTo(0.2);


  var item;

  for (var i = 0; i < 6; i++){
    item = game.add.sprite(190 + 69 * i, -100, 'phaser', i);
    item.anchor.setTo(0.5,0.5);

        // Add a simple bounce tween to each character's position.
    game.add.tween(item).to({y: 240}, 2400, Phaser.Easing.Bounce.Out, true, 1000 + 400 * i, false);

        // Add another rotation tween to the same character.
    game.add.tween(item).to({angle: 360}, 2400, Phaser.Easing.Cubic.In, true, 1000 + 400 * i, false);
  }

  emitter = game.add.emitter(game.world.centerX, 0, 400);

	emitter.width = game.world.width;
	// emitter.angle = 30; // uncomment to set an angle for the rain.

	emitter.makeParticles('rain');

//this sets the minnimal size and max size of panda
	emitter.minParticleScale = 0.1;
	emitter.maxParticleScale = 0.5;

	emitter.setYSpeed(300, 500);
	emitter.setXSpeed(-5, 5);

	emitter.minRotation = 2;
	emitter.maxRotation = 5;

	emitter.start(false, 1600, 5, 0);


  bam.animations.add('bam');
  bam.animations.play('bam', 15, true);

  var tween1 = game.add.tween(car);
  tween1.to({x: -60}, 6000);
  tween1.start();
  var tween2 = game.add.tween(smoke);
  tween2.to({x: -70}, 7000);
  tween2.start();

  emitter = game.add.sprite(game.world.centerX, game.world.centerY, 'rain');
  emitter.anchor.set(0.5);

  //  And enable the Sprite to have a physics body:
  game.physics.arcade.enable(emitter);




}

function update () {

    //  If the sprite is > 8px away from the pointer then let's move to it
    if (game.physics.arcade.distanceToPointer(emitter, game.input.activePointer) > 8)
    {
        //  Make the object seek to the active pointer (mouse or touch).
        game.physics.arcade.moveToPointer(emitter, 300);
    }
    else
    {
        //  Otherwise turn off velocity because we're close enough to the pointer
        emitter.body.velocity.set(0);
    }

}
