WordTrack.WordDone = function(game){
		this.wordDraw;
		this.arrTextForDraw = [];
		this.scaleRatio = 1.2;
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

			var imgWord = this.add.image(this.world.centerX, 100, this.wordDraw);
			imgWord.anchor.setTo(0.5, 0);
			imgWord.scale.set(this.scaleRatio);

			var alphabetX = (this.world.width - this.state.states['TraceWord'].cardWidth * this.scaleAlphabet * this.arrTextForDraw.length)/2;
			var groupAlphabet = this.add.group();
			for (var i = 0 ; i < this.arrTextForDraw.length ; i ++) {
					var imgAlphaBet = groupAlphabet.create(alphabetX, imgWord.y + imgWord.height + 20, 'export' + this.arrTextForDraw[i]);
					imgAlphaBet.anchor.set(0);
					imgAlphaBet.scale.set(this.scaleAlphabet);
					alphabetX = alphabetX + imgAlphaBet.width;
			}

			var btn = this.add.button(this.world.centerX, 455, 'btnNextWord', this.nextWord, this);
			btn.anchor.set(0.5);
	},

	nextWord: function() {
			// start the Game state
			this.state.start('Game');
	}
};
