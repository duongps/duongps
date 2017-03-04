WordTrack.Game = function(game){};

WordTrack.Game.prototype = {
	create: function(){
			var wordDraw = this.state.states['MainMenu'].wordDraw;
			var imageName = this.state.states['MainMenu'].imageName;

			//add text
			var textWordTrace = this.add.text(this.world.centerX, 10, 'Word	Tracer', {font: "24px Verdana", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

			var textLearnWord = this.add.text(this.world.centerX, 50, wordDraw, {font: "32px Verdana", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

			var img = this.game.add.image(this.world.centerX, this.world.centerY, imageName);
			img.anchor.set(0.5);

			var btn = this.add.button(this.world.centerX, 450, 'btnReady', this.readyGame, this);
			btn.anchor.set(0.5);
	},

	update: function() {

	},

	readyGame: function() {
		// start the Game state
		this.state.start('TraceWord');
	}
};
