WordTrack.WordDone = function(game){
		this.wordDraw;
		this.arrTextForDraw = [];
		this.scaleRatio = 0.75;
		this.scaleAlphabet = 0.25;
};

WordTrack.WordDone.prototype = {
	create: function(){
			this.wordDraw = this.state.states['TraceWord'].wordDraw;
			console.log("draw done word: " + this.wordDraw);
			this.arrTextForDraw = Array.from(this.wordDraw);
      //add text
      var textWordTrace = this.add.text(this.world.centerX, 5, 'Word	Tracer', {font: "20px Verdana", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

			var textLearnWord = this.add.text(this.world.centerX, 40, 'No.1	word', {font: "23px Verdana", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

			var img = this.game.add.image(this.world.centerX, 100, 'card');
			img.anchor.setTo(0.5, 0);
			img.scale.set(this.scaleRatio);

			var imgWordY = img.y + img.height / 2 - this.state.states['MainMenu'].spaceWordCardHeight * this.scaleRatio;
			var imgWord = this.add.image(this.world.centerX, imgWordY, this.wordDraw);
			imgWord.anchor.set(0.5);
			imgWord.scale.set(this.scaleRatio);

			var alphabetX = (this.world.width - this.cache.getImage('card').width * this.scaleAlphabet * this.arrTextForDraw.length)/2;
			var groupAlphabet = this.add.group();
			for (var i = 0 ; i < this.arrTextForDraw.length ; i ++) {
					var imgAlphaBet = groupAlphabet.create(alphabetX, img.y + img.height + 10, 'export' + this.arrTextForDraw[i]);
					imgAlphaBet.anchor.set(0);
					imgAlphaBet.scale.set(this.scaleAlphabet);
					alphabetX = alphabetX + imgAlphaBet.width;
			}

			if(this.state.states['MainMenu'].arrWordDraw.length === 0) {
					this.txtWellDone = this.add.text(500, 150, 'You got one stamp', {font: "24px Verdana", fill: '#FF0000'});

					this.imgStarWellDone = this.add.sprite(850, this.world.centerY, 'welldone');
					this.imgStarWellDone.anchor.set(0.5);
					this.add.tween(this.imgStarWellDone).to( { x: 640 }, 500, "Linear", true);
					this.add.tween(this.imgStarWellDone.scale).to({x: 1.3, y: 1.3}, 700, "Linear", true, 0 , -1, true);

					var btn = this.add.button(this.world.centerX, 455, 'btnNextWord', this.nextLesson, this);
					btn.anchor.set(0.5);
			}else {
					var btn = this.add.button(this.world.centerX, 455, 'btnNextWord', this.nextWord, this);
					btn.anchor.set(0.5);
			}
	},

	nextWord: function() {
			// start the Game state
			this.state.start('Game');
	},

	nextLesson: function() {
			// start the Game state
			this.state.start('MainMenu');
	},

};
