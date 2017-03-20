WordTrack.MainMenu = function(game){
		this.arrWordDraw = [];
		//define image
		this.imgNo1;
		this.imgNo2;
		this.imgNo3;

		this.btnStart;

		this.spaceImageNo = 25;
		this.spaceWordCardHeight = 20;
		this.spaceTextCardHeight = 90;

		this.jsonWord;
		this.n1;
		this.n2;
		this.n3;
};

WordTrack.MainMenu.prototype = {
	create: function(){
			var jsonObjWord = this.state.states['Preloader'].jsonObjWord;
			this.jsonWord = JSON.parse(jsonObjWord);
			var maxLength = this.jsonWord.word.length - 1;
			this.n1 = this.rnd.integerInRange(0, maxLength);
			this.n2 = this.rnd.integerInRange(0, maxLength);
			this.n3 = this.rnd.integerInRange(0, maxLength);
			while(this.n2 === this.n1) {
					this.n2 = this.rnd.integerInRange(0, maxLength);
			}
			while(this.n3 === this.n1 || this.n3 === this.n2) {
					this.n3 = this.rnd.integerInRange(0, maxLength);
			}

      //add text
      var textWordTrace = this.add.text(this.world.centerX,10,'Word Tracer', {font: "72px Verdana", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

      var textLearnWord = this.add.text(this.world.centerX,100,'Learn 3 words', {font: "24px Verdana", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

			//add image
			var widthImageNo = this.cache.getImage('card').width;
			var imageNo1X = (this.world.width - 3 * widthImageNo - 2 * this.spaceImageNo) / 2 + widthImageNo / 2;
			var imageNo2X = imageNo1X + widthImageNo + this.spaceImageNo;
			var imageNo3X = imageNo2X + widthImageNo + this.spaceImageNo;

			//add card 1
			this.imgNo1 = this.add.image(imageNo1X , 280, 'card');
			this.imgNo1.anchor.set(0.5);
			this.imgNo1.inputEnabled = true;
			var imgWord1 = this.add.image(this.imgNo1.x, this.imgNo1.y - this.spaceWordCardHeight, this.jsonWord.word[this.n1].text);
			imgWord1.anchor.set(0.5);
			var imgWordText1 = this.add.text(this.imgNo1.x, this.imgNo1.y + this.spaceTextCardHeight,this.jsonWord.word[this.n1].text, {font: "21px Verdana", fill: '#000000'});
			imgWordText1.anchor.set(0.5);

			//add card 2
			this.imgNo2 = this.add.image(imageNo2X, 280, 'card');
			this.imgNo2.anchor.set(0.5);
			this.imgNo2.inputEnabled = true;
			var imgWord2 = this.add.image(this.imgNo2.x, this.imgNo2.y - this.spaceWordCardHeight, this.jsonWord.word[this.n2].text);
			imgWord2.anchor.set(0.5);
			var imgWordText2 = this.add.text(this.imgNo2.x, this.imgNo2.y + this.spaceTextCardHeight,this.jsonWord.word[this.n2].text, {font: "21px Verdana", fill: '#000000'});
			imgWordText2.anchor.set(0.5);

			//add card 3
			this.imgNo3 = this.add.image(imageNo3X, 280, 'card');
			this.imgNo3.anchor.set(0.5);
			this.imgNo3.inputEnabled = true;
			var imgWord3 = this.add.image(this.imgNo3.x, this.imgNo3.y - this.spaceWordCardHeight, this.jsonWord.word[this.n3].text);
			imgWord3.anchor.set(0.5);
			var imgWordText3 = this.add.text(this.imgNo3.x, this.imgNo3.y + this.spaceTextCardHeight, this.jsonWord.word[this.n3].text,
																					{font: "21px Verdana", fill: '#000000'});
			imgWordText3.anchor.set(0.5);

      //add button start
      this.btnStart = this.add.button(this.world.centerX, this.imgNo2.y + this.imgNo2.height/2 + 10,
																					'btnStart', this.startGame, this, 1, 0, 2);
      this.btnStart.anchor.setTo(0.5, 0);
			this.btnStart.inputEnabled = true;
	},

	startGame: function() {
				// start the Game state
				this.arrWordDraw = [this.jsonWord.word[this.n1].text, this.jsonWord.word[this.n2].text, this.jsonWord.word[this.n3].text];
				this.state.start('Game');
	}
};
