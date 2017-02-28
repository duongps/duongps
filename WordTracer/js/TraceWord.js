WordTrack.TraceWord = function(game){
		this.btnDone;
		this.btnTryAgain;
		this.btnNextWord
		this.txtWellDone;
		this.txtBadDraw;

		this.imgAlphaBet;

		this.imgOne;
		this.imgTwo;
		this.imgThree;
		this.imgFour;
		this.imgFive;
		this.imgSix;
		this.imgSeven;
		this.imgEight;

		this.arrResult = [];

		this.jsonObjNumber;

		//define array save numbers for horver
		this.arrTextForDraw;

		this.bmd;
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

			this.btnTryAgain = this.add.button(570, 440, 'tryagain', this.actionOnClickDone, this);
			this.btnTryAgain.events.onInputOver.add(this.onOverButton, this);
			this.btnTryAgain.events.onInputOut.add(this.onOutButton, this);
			this.btnTryAgain.visible = false;

			this.btnNextWord = this.add.button(570, 440, 'nextword', this.actionOnClickDone, this);
			this.btnNextWord.events.onInputOver.add(this.onOverButton, this);
			this.btnNextWord.events.onInputOut.add(this.onOutButton, this);
			this.btnNextWord.visible = false;

			this.txtWellDone = this.add.text(570, 400, 'Well Done', {font: "24px Arial", fill: '#FFFFFF'});
			this.txtWellDone.visible = false;

			this.txtBadDraw = this.add.text(570, 400, 'Bad Draw', {font: "24px Arial", fill: '#FFFFFF'});
			this.txtBadDraw.visible = false;

			this.arrTextForDraw = ['p', 'i', 'n', 'e', 'a', 'p', 'p', 'l', 'e'];

			var graphics = this.add.graphics(0,0);
	    graphics.beginFill(0xFFCC99);
	    graphics.drawRect(230, 100, 300, 370);

			this.game.add.image(240, 100, 'iconPineapple');

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

			//init word p first
			this.initWord('p');

			//enable input all number
			this.addEventAllNumbers();

			this.bmd = this.add.bitmapData(800, 600);
			this.add.sprite(0, 0, this.bmd);
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

			this.imgOne.events.onInputDown.add(this.overNumber, this);
			this.imgTwo.events.onInputDown.add(this.overNumber, this);
			this.imgThree.events.onInputDown.add(this.overNumber, this);
			this.imgFour.events.onInputDown.add(this.overNumber, this);
			this.imgFive.events.onInputDown.add(this.overNumber, this);
			this.imgSix.events.onInputDown.add(this.overNumber, this);
			this.imgSeven.events.onInputDown.add(this.overNumber, this);
			this.imgEight.events.onInputDown.add(this.overNumber, this);

			this.imgOne.events.onInputOver.add(this.overNumber, this);
			this.imgTwo.events.onInputOver.add(this.overNumber, this);
			this.imgThree.events.onInputOver.add(this.overNumber, this);
			this.imgFour.events.onInputOver.add(this.overNumber, this);
			this.imgFive.events.onInputOver.add(this.overNumber, this);
			this.imgSix.events.onInputOver.add(this.overNumber, this);
			this.imgSeven.events.onInputOver.add(this.overNumber, this);
			this.imgEight.events.onInputOver.add(this.overNumber, this);
	},

	actionOnClickDone: function() {
			if(this.arrResult.length == 8){
					console.log('well done');
					this.btnDone.visible = false;
					this.txtWellDone.visible = true;
					this.btnNextWord.visible = true;
			}else {
					console.log('bad draw');
					this.btnDone.visible = false;
					this.txtBadDraw.visible = true;
					this.btnTryAgain.visible = true;
			}
	},

	actionOnClickTryAgain: function() {

	},

	actionOnClickNextWord: function() {

	},

	onOverButton: function() {
			this.input.deleteMoveCallback(this.paint, this);
	},

	onOutButton: function() {
			this.input.addMoveCallback(this.paint, this);
	},

	paint: function(pointer, x, y) {
			if (pointer.isDown)
			{
					this.bmd.circle(x, y, 10, '#FFCCCC');
			}
	},

	overNumber: function(obj) {
			if(this.input.mousePointer.isDown && this.arrResult.indexOf(obj) == -1) {
					this.arrResult.push(obj);
					console.log('this.resultTotal: ' + this.arrResult);
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
																	{"name": "imgFour", "x": 400, "y":  200},\
																	{"name": "imgFive", "x": 400, "y":  290},\
																	{"name": "imgSix", "x": 320, "y":  335},\
																	{"name": "imgSeven", "x": 400, "y":  335},\
																	{"name": "imgEight", "x": 480, "y":  335}]}',
			jsonNumber = JSON.parse(this.jsonObjNumber);
			console.log(jsonNumber.wordI[0].name);

			switch (word) {
				case 'p':
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
					break;
				case 'i':
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
					break;
				case 'n':
						this.initWordN();
					break;
				default:
			}
	}
};
