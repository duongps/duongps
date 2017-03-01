WordTrack.TraceWord = function(game){
		this.arrTextForDraw = ['P', 'I', 'N', 'E', 'A', 'P', 'P', 'L', 'E'];
		//this.arrTextForDraw = ['P'];
		this.btnDone;
		this.btnTryAgain;
		this.btnNextWord
		this.txtWellDone;
		this.txtBadDraw;
		this.imgStarWellDone;

		this.imgAlphaBet;
		this.iconPineapple;

		this.imgOne;
		this.imgTwo;
		this.imgThree;
		this.imgFour;
		this.imgFive;
		this.imgSix;
		this.imgSeven;
		this.imgEight;
		this.imgNine;

		this.arrResult = [];
		this.totalNumbers;

		this.jsonObjNumber;

		//define array save numbers for horver
		this.arrTextForDraw;

		this.bmd;
		this.drawImage;
		this.isDrawing = true;
};

WordTrack.TraceWord.prototype = {
	create: function(){
			//add text
			var textWordTrace = this.add.text(this.world.centerX,10,'Word	Tracer', {font: "24px Arial", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

			var textLearnWord = this.add.text(this.world.centerX,50,'No.1	word', {font: "32px Arial", fill: '#FFFFFF'});
			textLearnWord.anchor.setTo(0.5, 0);

			this.btnDone = this.add.button(570, 440, 'done', this.actionOnClickDone, this);
			this.btnDone.events.onInputOver.add(this.onOverButton, this);
			this.btnDone.events.onInputOut.add(this.onOutButton, this);

			this.btnTryAgain = this.add.button(570, 440, 'tryagain', this.actionOnClickTryAgain, this);
			this.btnTryAgain.events.onInputOver.add(this.onOverButton, this);
			this.btnTryAgain.events.onInputOut.add(this.onOutButton, this);
			this.btnTryAgain.visible = false;

			this.btnNextWord = this.add.button(570, 440, 'nextword', this.actionOnClickNextWord, this);
			this.btnNextWord.events.onInputOver.add(this.onOverButton, this);
			this.btnNextWord.events.onInputOut.add(this.onOutButton, this);
			this.btnNextWord.visible = false;

			this.txtWellDone = this.add.text(570, 400, 'Well Done', {font: "24px Arial", fill: '#FFFFFF'});
			this.txtWellDone.visible = false;

			this.txtBadDraw = this.add.text(570, 400, 'Bad Draw', {font: "24px Arial", fill: '#FFFFFF'});
			this.txtBadDraw.visible = false;

			this.imgStarWellDone = this.add.sprite(640, this.world.centerY, 'welldone');
			this.imgStarWellDone.anchor.set(0.5);

			var graphics = this.add.graphics(0,0);
	    graphics.beginFill(0xFFCC99);
	    graphics.drawRect(230, 100, 300, 370);

			this.iconPineapple = this.game.add.image(240, 100, 'iconPineapple');

			this.imgAlphaBet = this.game.add.image(this.world.centerX + 30, 130, 'wordP');
			this.imgAlphaBet.anchor.setTo(0.5, 0);

			this.imgOne = this.add.sprite(0, 0, 'img1');
			this.imgOne.anchor.set(0.5);
			this.imgTwo = this.add.sprite(0, 0, 'img2');
			this.imgTwo.anchor.set(0.5);
			this.imgThree = this.add.sprite(0, 0, 'img3');
			this.imgThree.anchor.set(0.5);
			this.imgFour = this.add.sprite(0, 0, 'img4');
			this.imgFour.anchor.set(0.5);
			this.imgFive = this.add.sprite(0, 0, 'img5');
			this.imgFive.anchor.set(0.5);
			this.imgSix = this.add.sprite(0, 0, 'img6');
			this.imgSix.anchor.set(0.5);
			this.imgSeven = this.add.sprite(0, 0, 'img7');
			this.imgSeven.anchor.set(0.5);
			this.imgEight = this.add.sprite(0, 0, 'img8');
			this.imgEight.anchor.set(0.5);
			this.imgNine = this.add.sprite(0, 0, 'img9');
			this.imgNine.anchor.set(0.5);
			this.imgNine.visible = false;

			//init word p first
			this.initWord(this.arrTextForDraw.shift());

			//enable input all number
			this.addEventAllNumbers();

			this.bmd = this.add.bitmapData(800, 600);
			this.drawImage = this.add.sprite(0, 0, this.bmd);
		  this.input.addMoveCallback(this.paint, this);
	},

	addEventAllNumbers: function() {
			this.imgOne.inputEnabled = true;
			this.imgTwo.inputEnabled = true;
			this.imgThree.inputEnabled = true;
			this.imgFour.inputEnabled = true;
			this.imgFive.inputEnabled = true;
			this.imgSix.inputEnabled = true;
			this.imgSeven.inputEnabled = true;
			this.imgEight.inputEnabled = true;
			this.imgNine.inputEnabled = true;

			this.imgOne.events.onInputDown.add(this.overNumber, this);
			this.imgTwo.events.onInputDown.add(this.overNumber, this);
			this.imgThree.events.onInputDown.add(this.overNumber, this);
			this.imgFour.events.onInputDown.add(this.overNumber, this);
			this.imgFive.events.onInputDown.add(this.overNumber, this);
			this.imgSix.events.onInputDown.add(this.overNumber, this);
			this.imgSeven.events.onInputDown.add(this.overNumber, this);
			this.imgEight.events.onInputDown.add(this.overNumber, this);
			this.imgNine.events.onInputDown.add(this.overNumber, this);

			this.imgOne.events.onInputOver.add(this.overNumber, this);
			this.imgTwo.events.onInputOver.add(this.overNumber, this);
			this.imgThree.events.onInputOver.add(this.overNumber, this);
			this.imgFour.events.onInputOver.add(this.overNumber, this);
			this.imgFive.events.onInputOver.add(this.overNumber, this);
			this.imgSix.events.onInputOver.add(this.overNumber, this);
			this.imgSeven.events.onInputOver.add(this.overNumber, this);
			this.imgEight.events.onInputOver.add(this.overNumber, this);
			this.imgNine.events.onInputOver.add(this.overNumber, this);
	},

	setVisibleAllImages: function(flag) {
			this.imgAlphaBet.visible = flag;
			this.iconPineapple.visible = flag;
			this.imgOne.visible = flag;
			this.imgTwo.visible = flag;
			this.imgThree.visible = flag;
			this.imgFour.visible = flag;
			this.imgFive.visible = flag;
			this.imgSix.visible = flag;
			this.imgSeven.visible = flag;
			this.imgEight.visible = flag;
			this.imgNine.visible = flag;
	},

	actionOnClickDone: function() {
			if(this.arrResult.length == this.totalNumbers){
					console.log('well done');
					this.btnDone.visible = false;
					this.txtWellDone.visible = true;
					this.btnNextWord.visible = true;
					this.setVisibleAllImages(false);
					this.add.tween(this.imgStarWellDone).to( { x: 640 }, 500, "Linear", true);
					this.add.tween(this.imgStarWellDone.scale).to({x: 1.3, y: 1.3}, 700, "Linear", true, 0 , -1, true);

					this.isDrawing = false;
			}else {
					console.log('bad draw');
					this.btnDone.visible = false;
					this.txtBadDraw.visible = true;
					this.btnTryAgain.visible = true;

					this.isDrawing = false;
			}
	},

	actionOnClickTryAgain: function() {
			this.arrResult = [];
			this.bmd.clear();
			this.input.addMoveCallback(this.paint, this);

			this.btnDone.visible = true;
			this.txtBadDraw.visible = false;
			this.btnTryAgain.visible = false;

			this.isDrawing = true;
	},

	actionOnClickNextWord: function() {
			if(this.arrTextForDraw.length == 0) {
					this.state.start('WordDone');
			}

			this.arrResult = [];
			this.bmd.clear();
			this.input.addMoveCallback(this.paint, this);
			this.initWord(this.arrTextForDraw.shift());

			this.btnDone.visible = true;
			this.txtWellDone.visible = false;
			this.btnNextWord.visible = false;

			this.isDrawing = true;
	},

	onOverButton: function() {
			this.input.deleteMoveCallback(this.paint, this);
	},

	onOutButton: function() {
			if(this.isDrawing) {
					this.input.addMoveCallback(this.paint, this);
			}else {
					this.input.deleteMoveCallback(this.paint, this);
			}
	},

	paint: function(pointer, x, y) {
			if (pointer.isDown)
			{
					this.bmd.circle(x, y, 10, '#00CC00');
			}
	},

	overNumber: function(obj) {
			if(this.input.mousePointer.isDown && this.arrResult.indexOf(obj) == -1) {
					this.arrResult.push(obj);
			}
	},

	update: function() {
	},

	initWord: function(word){
			//local web can not use json file so that temparory use local data
			this.jsonObjNumber = '{"wordP":[{"name": "imgOne", "x": 327 , "y": 147},\
																	{"name": "imgTwo", "x": 327, "y":  310},\
																	{"name": "imgThree", "x": 327, "y":  427},\
																	{"name": "imgFour", "x": 360, "y":  147},\
																	{"name": "imgFive", "x": 440, "y":  155},\
																	{"name": "imgSix", "x": 482, "y":  220},\
																	{"name": "imgSeven", "x": 440, "y":  297},\
																	{"name": "imgEight", "x": 360, "y":  310}],\
														"wordI":[{"name": "imgOne", "x": 320 , "y": 155},\
																	{"name": "imgTwo", "x": 400, "y":  155},\
																	{"name": "imgThree", "x": 480, "y":  155},\
																	{"name": "imgFour", "x": 400, "y":  190},\
																	{"name": "imgFive", "x": 400, "y":  300},\
																	{"name": "imgSix", "x": 320, "y":  335},\
																	{"name": "imgSeven", "x": 400, "y":  335},\
																	{"name": "imgEight", "x": 480, "y":  335}],\
														"wordN":[{"name": "imgOne", "x": 330 , "y": 150},\
																	{"name": "imgTwo", "x": 330, "y":  266},\
																	{"name": "imgThree", "x": 330, "y":  383},\
																	{"name": "imgFour", "x": 355, "y":  170},\
																	{"name": "imgFive", "x": 455, "y":  363},\
																	{"name": "imgSix", "x": 480, "y":  150},\
																	{"name": "imgSeven", "x": 480, "y":  266},\
																	{"name": "imgEight", "x": 480, "y":  383}],\
														"wordA":[{"name": "imgOne", "x": 330 , "y": 325},\
																	{"name": "imgTwo", "x": 360, "y":  240},\
																	{"name": "imgThree", "x": 390, "y":  160},\
																	{"name": "imgFour", "x": 425, "y":  160},\
																	{"name": "imgFive", "x": 450, "y":  240},\
																	{"name": "imgSix", "x": 480, "y":  325},\
																	{"name": "imgSeven", "x": 380, "y":  290},\
																	{"name": "imgEight", "x": 430, "y":  290}],\
														"wordE":[{"name": "imgOne", "x": 320 , "y": 160},\
																	{"name": "imgTwo", "x": 320, "y":  275},\
																	{"name": "imgThree", "x": 320, "y":  375},\
																	{"name": "imgFour", "x": 350, "y":  160},\
																	{"name": "imgFive", "x": 490, "y":  160},\
																	{"name": "imgSix", "x": 350, "y":  275},\
																	{"name": "imgSeven", "x": 490, "y":  275},\
																	{"name": "imgEight", "x": 350, "y":  375},\
																	{"name": "imgNine", "x": 490, "y":  375}],\
														"wordL":[{"name": "imgOne", "x": 360 , "y": 160},\
																	{"name": "imgTwo", "x": 360, "y":  230},\
																	{"name": "imgThree", "x": 360, "y": 302},\
																	{"name": "imgFour", "x": 390, "y":  302},\
																	{"name": "imgFive", "x": 455, "y":  302}]\
																}',
			jsonNumber = JSON.parse(this.jsonObjNumber);
			console.log(jsonNumber.wordI[0].name);

			this.setVisibleAllImages(true);
			this.imgStarWellDone.x = 850;

			switch (word) {
				case 'P':
						this.imgAlphaBet.loadTexture("wordP");

						this.imgOne.x = jsonNumber.wordP[0].x;
						this.imgOne.y = jsonNumber.wordP[0].y;
						this.imgTwo.x = jsonNumber.wordP[1].x;
						this.imgTwo.y = jsonNumber.wordP[1].y;
						this.imgThree.x = jsonNumber.wordP[2].x;
						this.imgThree.y = jsonNumber.wordP[2].y;
						this.imgFour.x = jsonNumber.wordP[3].x;;
						this.imgFour.y = jsonNumber.wordP[3].y;
						this.imgFive.x = jsonNumber.wordP[4].x;;
						this.imgFive.y = jsonNumber.wordP[4].y;
						this.imgSix.x = jsonNumber.wordP[5].x;;
						this.imgSix.y = jsonNumber.wordP[5].y;
						this.imgSeven.x = jsonNumber.wordP[6].x;;
						this.imgSeven.y = jsonNumber.wordP[6].y;
						this.imgEight.x = jsonNumber.wordP[7].x;;
						this.imgEight.y = jsonNumber.wordP[7].y;

						this.imgNine.visible = false;
						this.totalNumbers = 8;
					break;
				case 'I':
						this.imgAlphaBet.loadTexture("wordI");

						this.imgOne.x = jsonNumber.wordI[0].x;
						this.imgOne.y = jsonNumber.wordI[0].y;
						this.imgTwo.x = jsonNumber.wordI[1].x;
						this.imgTwo.y = jsonNumber.wordI[1].y;
						this.imgThree.x = jsonNumber.wordI[2].x;
						this.imgThree.y = jsonNumber.wordI[2].y;
						this.imgFour.x = jsonNumber.wordI[3].x;;
						this.imgFour.y = jsonNumber.wordI[3].y;
						this.imgFive.x = jsonNumber.wordI[4].x;;
						this.imgFive.y = jsonNumber.wordI[4].y;
						this.imgSix.x = jsonNumber.wordI[5].x;;
						this.imgSix.y = jsonNumber.wordI[5].y;
						this.imgSeven.x = jsonNumber.wordI[6].x;;
						this.imgSeven.y = jsonNumber.wordI[6].y;
						this.imgEight.x = jsonNumber.wordI[7].x;;
						this.imgEight.y = jsonNumber.wordI[7].y;

						this.imgNine.visible = false;
						this.totalNumbers = 8;
					break;
				case 'N':
						this.imgAlphaBet.loadTexture("wordN");

						this.imgOne.x = jsonNumber.wordN[0].x;
						this.imgOne.y = jsonNumber.wordN[0].y;
						this.imgTwo.x = jsonNumber.wordN[1].x;
						this.imgTwo.y = jsonNumber.wordN[1].y;
						this.imgThree.x = jsonNumber.wordN[2].x;
						this.imgThree.y = jsonNumber.wordN[2].y;
						this.imgFour.x = jsonNumber.wordN[3].x;;
						this.imgFour.y = jsonNumber.wordN[3].y;
						this.imgFive.x = jsonNumber.wordN[4].x;;
						this.imgFive.y = jsonNumber.wordN[4].y;
						this.imgSix.x = jsonNumber.wordN[5].x;;
						this.imgSix.y = jsonNumber.wordN[5].y;
						this.imgSeven.x = jsonNumber.wordN[6].x;;
						this.imgSeven.y = jsonNumber.wordN[6].y;
						this.imgEight.x = jsonNumber.wordN[7].x;;
						this.imgEight.y = jsonNumber.wordN[7].y;

						this.imgNine.visible = false;
						this.totalNumbers = 8;
					break;
				case 'A':
						this.imgAlphaBet.loadTexture("wordA");

						this.imgOne.x = jsonNumber.wordA[0].x;
						this.imgOne.y = jsonNumber.wordA[0].y;
						this.imgTwo.x = jsonNumber.wordA[1].x;
						this.imgTwo.y = jsonNumber.wordA[1].y;
						this.imgThree.x = jsonNumber.wordA[2].x;
						this.imgThree.y = jsonNumber.wordA[2].y;
						this.imgFour.x = jsonNumber.wordA[3].x;;
						this.imgFour.y = jsonNumber.wordA[3].y;
						this.imgFive.x = jsonNumber.wordA[4].x;;
						this.imgFive.y = jsonNumber.wordA[4].y;
						this.imgSix.x = jsonNumber.wordA[5].x;;
						this.imgSix.y = jsonNumber.wordA[5].y;
						this.imgSeven.x = jsonNumber.wordA[6].x;;
						this.imgSeven.y = jsonNumber.wordA[6].y;
						this.imgEight.x = jsonNumber.wordA[7].x;;
						this.imgEight.y = jsonNumber.wordA[7].y;

						this.imgNine.visible = false;
						this.totalNumbers = 8;
					break;
				case 'L':
						this.imgAlphaBet.loadTexture("wordL");

						this.imgOne.x = jsonNumber.wordL[0].x;
						this.imgOne.y = jsonNumber.wordL[0].y;
						this.imgTwo.x = jsonNumber.wordL[1].x;
						this.imgTwo.y = jsonNumber.wordL[1].y;
						this.imgThree.x = jsonNumber.wordL[2].x;
						this.imgThree.y = jsonNumber.wordL[2].y;
						this.imgFour.x = jsonNumber.wordL[3].x;;
						this.imgFour.y = jsonNumber.wordL[3].y;
						this.imgFive.x = jsonNumber.wordL[4].x;;
						this.imgFive.y = jsonNumber.wordL[4].y;

						this.imgSix.visible = false;
						this.imgSeven.visible = false;
						this.imgEight.visible = false;
						this.imgNine.visible = false;
						this.totalNumbers = 5;
					break;
				case 'E':
						this.imgAlphaBet.loadTexture("wordE");

						this.imgOne.x = jsonNumber.wordE[0].x;
						this.imgOne.y = jsonNumber.wordE[0].y;
						this.imgTwo.x = jsonNumber.wordE[1].x;
						this.imgTwo.y = jsonNumber.wordE[1].y;
						this.imgThree.x = jsonNumber.wordE[2].x;
						this.imgThree.y = jsonNumber.wordE[2].y;
						this.imgFour.x = jsonNumber.wordE[3].x;;
						this.imgFour.y = jsonNumber.wordE[3].y;
						this.imgFive.x = jsonNumber.wordE[4].x;;
						this.imgFive.y = jsonNumber.wordE[4].y;
						this.imgSix.x = jsonNumber.wordE[5].x;;
						this.imgSix.y = jsonNumber.wordE[5].y;
						this.imgSeven.x = jsonNumber.wordE[6].x;;
						this.imgSeven.y = jsonNumber.wordE[6].y;
						this.imgEight.x = jsonNumber.wordE[7].x;;
						this.imgEight.y = jsonNumber.wordE[7].y;
						this.imgNine.x = jsonNumber.wordE[8].x;;
						this.imgNine.y = jsonNumber.wordE[8].y;
						this.totalNumbers = 9;
					break;
				default:
			}
	}
};
