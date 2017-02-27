WordTrack.TraceWord = function(game){
		this.textLearnWord;
		this.textWordTrace;
		this.imgAlphaBet;

		this.imgOne;
		this.imgTwo;
		this.imgThree;
		this.imgFour;
		this.imgFive;
		this.imgSix;
		this.imgSeven;
		this.imgEight;

		//define array save numbers for horver
		this.arrApprovedNumberHover;
		this.arrTextForDraw;

		this.tmp;
		this.targetImg;

		this.checkDrawing = false;
		this.startDrawing = false;

		//define line between numbers
		this.groupLines;
		this.lineDrawing;

		//tween for numbers
		this.tween;

		//speed tween
		this.speedNumber = 200;
};

WordTrack.TraceWord.prototype = {
	create: function(){
			//add text
			this.textWordTrace = this.add.text(this.world.centerX,10,'Word	Tracer', {font: "24px Arial", fill: '#FFFFFF'});
			this.textWordTrace.anchor.setTo(0.5, 0);

			this.textLearnWord = this.add.text(this.world.centerX,50,'No.1	word', {font: "32px Arial", fill: '#FFFFFF'});
			this.textLearnWord.anchor.setTo(0.5, 0);

			this.arrTextForDraw = ['p', 'i', 'n', 'e', 'a', 'p', 'p', 'l', 'e'];

			var graphics = this.add.graphics(0,0);
	    graphics.beginFill(0xFFCC99);
	    graphics.drawRect(230, 100, 300, 370);

			this.game.add.image(240, 100, 'iconPineapple');

			this.imgAlphaBet = this.game.add.image(this.world.centerX + 30, 130, 'wordP');
			this.imgAlphaBet.anchor.setTo(0.5, 0);

			this.imgOne = this.add.sprite(327, 147, 'img1');
			this.imgOne.anchor.set(0.5);
			this.imgTwo = this.add.sprite(327, 310, 'img2');
			this.imgTwo.anchor.set(0.5);
			this.imgThree = this.add.sprite(327, 427, 'img3');
			this.imgThree.anchor.set(0.5);
			this.imgFour = this.add.sprite(360, 147, 'img4');
			this.imgFour.anchor.set(0.5);
			this.imgFive = this.add.sprite(440, 155, 'img5');
			this.imgFive.anchor.set(0.5);
			this.imgSix = this.add.sprite(482, 220, 'img6');
			this.imgSix.anchor.set(0.5);
			this.imgSeven = this.add.sprite(440, 297, 'img7');
			this.imgSeven.anchor.set(0.5);
			this.imgEight = this.add.sprite(360, 310, 'img8');
			this.imgEight.anchor.set(0.5);

			this.arrApprovedNumberHover = [this.imgOne, this.imgTwo, this.imgFour, this.imgFive, this.imgSix, this.imgSeven];

			//enable input all number
			this.enableInputAllNumber(true);

			this.imgOne.events.onInputDown.add(this.listenerDrawingImgOne, this);
			this.imgTwo.events.onInputOver.add(this.over, this);
			this.imgThree.events.onInputOver.add(this.over, this);
			this.imgFour.events.onInputOver.add(this.over, this);
			this.imgFive.events.onInputOver.add(this.over, this);
			this.imgSix.events.onInputOver.add(this.over, this);
			this.imgSeven.events.onInputOver.add(this.over, this);
			this.imgEight.events.onInputOver.add(this.over, this);

			this.tween = this.add.tween(this.imgOne).to( { alpha: 0.2 }, this.speedNumber, "Linear", true ,0 , -1 , true);

			//add group lines
			this.groupLines = this.add.group();
	},

	over: function(obj) {
			if(!this.startDrawing || obj != this.targetImg) {
					return;
			}

			this.tween.stop();
			obj.alpha = 1;
			if(this.checkDrawing) {
					this.lineDrawing.height = Math.sqrt((obj.x - this.lineDrawing.x) * (obj.x - this.lineDrawing.x)
																				+ (obj.y - this.lineDrawing.y) * (obj.y - this.lineDrawing.y));
					this.lineDrawing.rotation = this.physics.arcade.angleBetween(this.lineDrawing, obj) - 3.14/2;
			}

			// image eight stop drawing
			if(obj == this.imgEight) {
					this.startDrawing = false;
					this.checkDrawing = false;
					this.initWord('i');
					return;
			}

			switch (obj) {
				case this.imgTwo:
					this.targetImg = this.imgThree;
					break;
				case this.imgThree:
					this.targetImg = this.imgFour;
					break;
				case this.imgFour:
					this.targetImg = this.imgFive;
					break;
				case this.imgFive:
					this.targetImg = this.imgSix;
					break;
				case this.imgSix:
					this.targetImg = this.imgSeven;
					break;
				case this.imgSeven:
					this.targetImg = this.imgEight;
					break;
			}

			this.tween = this.add.tween(this.targetImg).to( { alpha: 0.2 }, this.speedNumber, "Linear", true ,0 , -1 , true);

			for(var i = 0 ; i < this.arrApprovedNumberHover.length ; i++) {
					if(obj == this.arrApprovedNumberHover[i]){
							this.lineDrawing = this.groupLines.create(obj.x, obj.y, 'line');
							this.lineDrawing.width = 15;
							this.lineDrawing.height = 0;
							this.lineDrawing.alpha = 0.5;
							this.lineDrawing.anchor.setTo(0.5, 0.0);
							this.physics.arcade.enable(this.lineDrawing, Phaser.Physics.ARCADE);
							this.tmp = obj;
							if(this.startDrawing) {
									this.checkDrawing = true;
							}
							break;
					}

					this.checkDrawing = false;
			}

			//remove event horver
			obj.inputEnabled = false;
	},

	listenerDrawingImgOne: function() {
			this.tween.stop();
			this.imgOne.alpha = 1;
			this.startDrawing = true;

			if(!this.checkDrawing) {
					this.tween = this.add.tween(this.imgTwo).to( { alpha: 0.2 }, this.speedNumber, "Linear", true ,0 , -1 , true);

					this.lineDrawing = this.groupLines.create(this.imgOne.x, this.imgOne.y, 'line');
					this.lineDrawing.width = 15;
					this.lineDrawing.height = 0;
					this.lineDrawing.alpha = 0.5;
					this.lineDrawing.anchor.setTo(0.5, 0.0);
					this.physics.arcade.enable(this.lineDrawing, Phaser.Physics.ARCADE);

					this.checkDrawing = true;
					this.tmp = this.imgOne;
					this.targetImg = this.imgTwo;
			}
	},

	update: function() {
			if (this.checkDrawing)
	 		{
					this.lineDrawing.rotation = this.physics.arcade.angleBetween(this.tmp, this.input.mousePointer) - 3.14/2;
					this.lineDrawing.height = this.physics.arcade.distanceToPointer(this.tmp);
			}else {
					this.checkDrawing = false;
			}
	},

	enableInputAllNumber: function(flag) {
			this.imgOne.inputEnabled = flag;
			this.imgTwo.inputEnabled = flag;
			this.imgThree.inputEnabled = flag;
			this.imgFour.inputEnabled = flag;
			this.imgFive.inputEnabled = flag;
			this.imgSix.inputEnabled = flag;
			this.imgSeven.inputEnabled = flag;
			this.imgEight.inputEnabled = flag;
	},

	initWord: function(word){
			this.groupLines.removeAll();
			this.enableInputAllNumber(true);
			this.tween = this.add.tween(this.imgOne).to( { alpha: 0.2 }, this.speedNumber, "Linear", true ,0 , -1 , true);
			switch (word) {
				case 'p':
						this.initWordP();
					break;
				case 'i':
						this.initWordI();
					break;
				case 'n':
						this.initWordN();
					break;
				default:
			}
	},

	//init word
	initWordP: function() {
			this.imgAlphaBet.loadTexture("wordP");
	},

	initWordI: function() {
			this.imgAlphaBet.loadTexture("wordI");

			this.arrApprovedNumberHover = [this.imgOne, this.imgTwo, this.imgFour, this.imgSix, this.imgSeven];

			this.imgOne.x = 320;
			this.imgOne.y = 155;

			this.imgTwo.x = 400;
			this.imgTwo.y = 155;

			this.imgThree.x = 480;
			this.imgThree.y = 155;

			this.imgFour.x = 400;
			this.imgFour.y = 200;

			this.imgFive.x = 400;
			this.imgFive.y = 290;

			this.imgSix.x = 320;
			this.imgSix.y = 335;

			this.imgSeven.x = 400;
			this.imgSeven.y = 335;

			this.imgEight.x = 480;
			this.imgEight.y = 335;
	},

	initWordN: function() {
			this.imgAlphaBet.loadTexture("wordN");

			this.arrApprovedNumberHover = [this.imgOne, this.imgTwo, this.imgFour, this.imgSix, this.imgSeven];

			this.imgOne.x = 320;
			this.imgOne.y = 155;

			this.imgTwo.x = 400;
			this.imgTwo.y = 155;

			this.imgThree.x = 480;
			this.imgThree.y = 155;

			this.imgFour.x = 400;
			this.imgFour.y = 200;

			this.imgFive.x = 400;
			this.imgFive.y = 290;

			this.imgSix.x = 320;
			this.imgSix.y = 335;

			this.imgSeven.x = 400;
			this.imgSeven.y = 335;

			this.imgEight.x = 480;
			this.imgEight.y = 335;
	},
};
