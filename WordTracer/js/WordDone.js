WordTrack.WordDone = function(game){};

WordTrack.WordDone.prototype = {
	create: function(){
      //add text
      var textWordTrace = this.add.text(this.world.centerX, 5, 'Word	Tracer', {font: "20px Verdana", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

			var textLearnWord = this.add.text(this.world.centerX, 40, 'No.1	word', {font: "23px Verdana", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

			var img = this.game.add.image(this.world.centerX, this.world.centerY, 'card');
			img.anchor.set(0.5);
			img.scale.set(1.2);

      var img = this.add.image(this.world.centerX, this.world.centerY, this.state.states['MainMenu'].wordDraw);
			img.anchor.set(0.5);

			var  tick = this.add.image(this.world.centerX , 280, 'tick');
			tick.anchor.set(0.5);

			var btn = this.add.button(this.world.centerX, 460, 'btnNextWord', this.nextWord, this);
			btn.anchor.set(0.5);
	},

	nextWord: function() {
		// start the Game state
		//this.state.start('Game');
	}
};
