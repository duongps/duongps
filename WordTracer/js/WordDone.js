WordTrack.WordDone = function(game){};

WordTrack.WordDone.prototype = {
	create: function(){
      //add text
      var textWordTrace = this.add.text(this.world.centerX,10,'Word	Tracer', {font: "24px Arial", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

			var textLearnWord = this.add.text(this.world.centerX,50,'No.1	word', {font: "32px Arial", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

      var img = this.game.add.image(this.world.centerX, 90, 'pineapple_done');
			img.anchor.set(0.5, 0);

			var btn = this.add.button(this.world.centerX, 460, 'btnnextword', this.nextWord, this);
			btn.anchor.set(0.5);
	},

	nextWord: function() {
		// start the Game state
		//this.state.start('Game');
	}
};
