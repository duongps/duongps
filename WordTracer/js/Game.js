WordTrack.Game = function(game){
		this.scaleRatio = 1.2;
};

WordTrack.Game.prototype = {
	create: function(){
			var wordDraw = this.state.states['MainMenu'].wordDraw;

			//add text
			var textWordTrace = this.add.text(this.world.centerX, 5, 'Word	Tracer', {font: "20px Verdana", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

			var textLearnWord = this.add.text(this.world.centerX, 40, wordDraw, {font: "23px Verdana", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

			var img = this.game.add.image(this.world.centerX, this.world.centerY, 'card');
			img.anchor.set(0.5);
			img.scale.set(this.scaleRatio);

			var imgWordY = img.y - this.state.states['MainMenu'].spaceWordCardHeight * this.scaleRatio;
			var imgWordTextY = img.y + this.state.states['MainMenu'].spaceTextCardHeight * this.scaleRatio;

			var imgWord = this.add.image(img.x, imgWordY, wordDraw);
			imgWord.anchor.set(0.5);
			imgWord.scale.set(this.scaleRatio);

			var imgWordText = this.add.text(img.x, imgWordTextY, wordDraw, {font: "21px Verdana", fill: '#000000'});
			imgWordText.anchor.set(0.5);
			imgWordText.scale.set(this.scaleRatio);

			var btn = this.add.button(this.world.centerX, 460, 'btnReady', this.readyGame, this, 1, 0, 2);
			btn.anchor.set(0.5);
	},

	update: function() {

	},

	readyGame: function() {
		// start the Game state
		this.state.start('TraceWord');
	}
};
