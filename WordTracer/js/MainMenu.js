WordTrack.MainMenu = function(game){};

WordTrack.MainMenu.prototype = {
	create: function(){
      //add text
      var textWordTrace = this.add.text(this.world.centerX,10,'Word Tracer', {font: "72px Arial", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

      var textLearnWord = this.add.text(this.world.centerX,150,'Learn 3 words', {font: "24px Arial", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

			//add image
			var spaceImageNo = 40;
			var widthImageNo = 112;
			var imageNo1X = (this.world.width - 3 * widthImageNo - 2 * spaceImageNo) / 2;
			var imageNo2X = imageNo1X + widthImageNo + spaceImageNo;
			var imageNo3X = imageNo2X + widthImageNo + spaceImageNo;

			this.add.image(imageNo1X , 200 , 'no1');
			this.add.image(imageNo2X, 200 , 'no2');
			this.add.image(imageNo3X, 200 , 'no3');

      //add button start
      var btn = this.add.button(this.world.centerX, 450, 'btnStart', this.startGame, this, 1, 0, 2);
      btn.anchor.set(0.5);
	},

	startGame: function() {
		// start the Game state
		this.state.start('Game');
	}
};
