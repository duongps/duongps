WordTrack.MainMenu = function(game){
		this.wordDraw;
		//define image
		this.imgNo1;
		this.imgNo2;
		this.imgNo3;

		//define ticker for choose image
		this.tick1;
		this.tick2;
		this.tick3;
		//check choose image or not
		this.isTick = false;

		this.btnStart;
};

WordTrack.MainMenu.prototype = {
	create: function(){
      //add text
      var textWordTrace = this.add.text(this.world.centerX,10,'Word Tracer', {font: "72px Arial", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

      var textLearnWord = this.add.text(this.world.centerX,100,'Learn 3 words', {font: "24px Arial", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

			//add image
			var spaceImageNo = 20;
			var widthImageNo = 180;
			var imageNo1X = (this.world.width - 3 * widthImageNo - 2 * spaceImageNo) / 2 + widthImageNo / 2;
			var imageNo2X = imageNo1X + widthImageNo + spaceImageNo;
			var imageNo3X = imageNo2X + widthImageNo + spaceImageNo;

			this.imgNo1 = this.add.image(imageNo1X , 280, 'pineapple');
			this.imgNo1.anchor.set(0.5);
			this.imgNo1.inputEnabled = true;
			this.imgNo2 = this.add.image(imageNo2X, 280, 'pineapple');
			this.imgNo2.anchor.set(0.5);
			this.imgNo2.inputEnabled = true;
			this.imgNo3 = this.add.image(imageNo3X, 280, 'pineapple');
			this.imgNo3.anchor.set(0.5);
			this.imgNo3.inputEnabled = true;

			this.tick1 = this.add.image(imageNo1X , 280 + 30, 'tick');
			this.tick1.anchor.set(0.5);
			this.tick2 = this.add.image(imageNo2X , 280 + 30, 'tick');
			this.tick2.anchor.set(0.5);
			this.tick3 = this.add.image(imageNo3X , 280 + 30, 'tick');
			this.tick3.anchor.set(0.5);

			this.tick1.visible = false;
			this.tick2.visible = false;
			this.tick3.visible = false;

			//set events
			this.imgNo1.events.onInputDown.add(this.clickImg, this);
			this.imgNo2.events.onInputDown.add(this.clickImg, this);
			this.imgNo3.events.onInputDown.add(this.clickImg, this);

      //add button start
      this.btnStart = this.add.button(this.world.centerX, 460, 'btnStart', this.startGame, this, 1, 0, 2);
      this.btnStart.anchor.set(0.5);
			this.btnStart.inputEnabled = false;
	},

	clickImg: function(obj) {
			console.log('click image');
			this.isTick = true;
			this.tick1.visible = false;
			this.tick2.visible = false;
			this.tick3.visible = false;
			this.btnStart.inputEnabled = true;

			switch (obj) {
				case this.imgNo1:
					this.tick1.visible = true;
					this.wordDraw = 'PINEAPPLE';
					break;
				case this.imgNo2:
					this.tick2.visible = true;
					this.wordDraw = 'PINEAPPLE';
					break;
				case this.imgNo3:
					this.tick3.visible = true;
					this.wordDraw = 'PINEAPPLE';
					break;
				default:
			}
	},

	startGame: function() {
		if(this.isTick) {
				// start the Game state
				this.state.start('Game');
		}
	}
};
