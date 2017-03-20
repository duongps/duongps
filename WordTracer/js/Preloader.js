WordTrack.Preloader = function(game){};

WordTrack.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#2FC8DD';

		this.load.spritesheet('btnStart','assets/img/button/btnstart.png', 220, 50);
		this.load.spritesheet('btnReady', 'assets/img/button/btnreadytogo.png', 220, 50);
		this.load.spritesheet('btnDone' , 'assets/img/button/btndone.png', 220, 50);
		this.load.spritesheet('btnTryAgain' , 'assets/img/button/btntryagain.png', 220, 50);
		this.load.spritesheet('btnNextWord' , 'assets/img/button/btnnextword.png', 220, 50);
		this.load.spritesheet('btnnextlesson' , 'assets/img/button/btnnextlesson.png', 220, 50);


		this.load.image('welldone' , 'assets/img/welldone.png');
		this.load.image('tick', 'assets/img/tick.png');

		//add image background
		this.load.image('card', 'assets/img/background/card.png');

		var jsonWord = this.cache.getJSON('wordJson');
		//add image word
		for(var i = 0 ; i < jsonWord.word.length ; i++) {
				this.load.image(jsonWord.word[i].text, 'assets/img/word/' + jsonWord.word[i].image);
		}

		var jsonNum = this.cache.getJSON('drawingJson');
		//add image alphabet
		for(var i = 0 ; i < jsonNum.length ; i++) {
				this.load.image(jsonNum[i].word, 'assets/img/alphabet/' + jsonNum[i].image);
				for(var j = 0 ; j < jsonNum[i].draw.length ; j++) {
						//mapping dashline image with key json
						this.load.image(jsonNum[i].draw[j].key, 'assets/img/alphabet/' + jsonNum[i].draw[j].image);
				}
		}

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

		//load audio
		this.load.audio('soundMoonlight', 'assets/sounds/MiningbyMoonlight.mp3');
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
