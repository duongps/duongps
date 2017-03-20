var WordTrack = {};
WordTrack.Boot = function(game){};
WordTrack.Boot.prototype = {
	preload: function(){
			//load json data
			this.load.json('drawingJson', 'assets/json/drawing.json');
			this.load.json('wordJson', 'assets/json/words.json');

			//load audio
			this.load.audio('soundMoonlight', 'assets/sounds/MiningbyMoonlight.mp3');

			this.load.spritesheet('btnStart','assets/img/button/btnstart.png', 220, 50);
			this.load.spritesheet('btnReady', 'assets/img/button/btnreadytogo.png', 220, 50);
			this.load.spritesheet('btnDone' , 'assets/img/button/btndone.png', 220, 50);
			this.load.spritesheet('btnTryAgain' , 'assets/img/button/btntryagain.png', 220, 50);
			this.load.spritesheet('btnNextWord' , 'assets/img/button/btnnextword.png', 220, 50);
			this.load.spritesheet('btnnextlesson' , 'assets/img/button/btnnextlesson.png', 220, 50);


			this.load.image('welldone' , 'assets/img/welldone.png');

			//add image background
			this.load.image('card', 'assets/img/background/card.png');

			//add image number
			this.load.image('1', 'assets/img/number/1.png');
			this.load.image('2', 'assets/img/number/2.png');
			this.load.image('3', 'assets/img/number/3.png');
			this.load.image('4', 'assets/img/number/4.png');
			this.load.image('5', 'assets/img/number/5.png');

			this.load.image('penlightpink', 'assets/img/penlightpink.png');
			this.load.image('penorange', 'assets/img/penorange.png');
			this.load.image('penblue', 'assets/img/penblue.png');
			this.load.image('pengreen', 'assets/img/pengreen.png');
			this.load.image('penpink', 'assets/img/penpink.png');
			this.load.image('penred', 'assets/img/penred.png');
			this.load.image('penviolet', 'assets/img/penviolet.png');

			this.load.image('btnnext', 'assets/img/btnnext.png');
			this.load.image('btnreload', 'assets/img/btnreload.png');

			this.load.image('levelcomplete', 'assets/img/levelcomplete.png');
	},

	create: function(){
		// set scale options
		// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		// start the Preloader state
		this.state.start('Preloader');
	}
};
