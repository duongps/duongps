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

		this.scaleDefault = 0.9;
		this.spaceImageNo = 40;
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
			//this.n1 = this.rnd.integerInRange(0, maxLength);
			//hard code to test
			this.n1 = 0;
			this.n2 = this.rnd.integerInRange(0, maxLength);
			this.n3 = this.rnd.integerInRange(0, maxLength);
			while(this.n2 === this.n1) {
					this.n2 = this.rnd.integerInRange(0, maxLength);
			}
			while(this.n3 === this.n1 || this.n3 === this.n2) {
					this.n3 = this.rnd.integerInRange(0, maxLength);
			}

			console.log('n1: '+ this.n1);
			console.log('n2: '+ this.n2);
			console.log('n3: '+ this.n3);

      //add text
      var textWordTrace = this.add.text(this.world.centerX,10,'Word Tracer', {font: "72px Verdana", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

      var textLearnWord = this.add.text(this.world.centerX,100,'Learn 3 words', {font: "24px Verdana", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

			//add image
			var widthImageNo = 180 * this.scaleDefault;
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
			var imgWordText3 = this.add.text(this.imgNo3.x, this.imgNo3.y + this.spaceTextCardHeight, this.jsonWord.word[this.n3].text, {font: "21px Verdana", fill: '#000000'});
			imgWordText3.anchor.set(0.5);

			this.scaleAllImageNo(this.scaleDefault);

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
      this.btnStart = this.add.button(this.world.centerX, 455, 'btnStart', this.startGame, this, 1, 0, 2);
      this.btnStart.anchor.set(0.5);
			this.btnStart.inputEnabled = false;
	},

	scaleAllImageNo: function(scale) {
			this.imgNo1.scale.set(scale);
			this.imgNo2.scale.set(scale);
			this.imgNo3.scale.set(scale);
	},

	clickImg: function(obj) {
			// console.log('click image');
			this.isTick = true;
			this.tick1.visible = false;
			this.tick2.visible = false;
			this.tick3.visible = false;
			this.btnStart.inputEnabled = true;

			switch (obj) {
				case this.imgNo1:
					this.tick1.visible = true;
					this.wordDraw = this.jsonWord.word[this.n1].text;
					break;
				case this.imgNo2:
					this.tick2.visible = true;
					this.wordDraw = this.jsonWord.word[this.n2].text;
					break;
				case this.imgNo3:
					this.tick3.visible = true;
					this.wordDraw = this.jsonWord.word[this.n3].text;
					break;
				default:
			}
			this.scaleAllImageNo(this.scaleDefault);
			obj.scale.set(1);
	},

	startGame: function() {
		if(this.isTick) {
				// start the Game state
				this.state.start('Game');
		}
	}
};
