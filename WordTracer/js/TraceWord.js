WordTrack.TraceWord = function(game){
		this.wordDraw;
		this.wordDrawing;
		this.arrTextForDraw = [];
		this.btnDone;
		this.btnTryAgain;
		this.btnNextWord
		this.txtWellDone;
		this.txtBadDraw;
		this.imgStarWellDone;

		this.imgAlphaBet;
		this.iconPineapple;
		this.background;

		this.imgOne;
		this.imgTwo;
		this.imgThree;
		this.imgFour;
		this.imgFive;
		this.imgSix;
		this.imgSeven;
		this.imgEight;
		this.imgNine;

		this.arrImgNumbers = [];

		this.arrResult = [];
		this.totalNumbers;

		//define array save numbers for horver
		this.arrTextForDraw;

		this.bmd;
		this.drawImage;
		this.isDrawing = true;
		this.countDraw = 0;
};

WordTrack.TraceWord.prototype = {
	create: function(){
			this.wordDraw = this.state.states['MainMenu'].wordDraw;
			this.arrTextForDraw = Array.from(this.wordDraw);
			//add text
			var textWordTrace = this.add.text(this.world.centerX, 5, 'Word	Tracer', {font: "20px Verdana", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

			this.wordDrawing = this.add.text(this.world.centerX, 40, this.wordDraw, {font: "23px Verdana", fill: '#FFFFFF'});
			this.wordDrawing.anchor.setTo(0.5, 0);

			this.btnDone = this.add.button(this.world.centerX, this.world.height - 40,
																		 		'done', this.actionOnClickDone, this);
			this.btnDone.anchor.set(0.5);

			this.btnTryAgain = this.add.button(this.world.centerX, this.world.height - 40,
				 																		'tryagain', this.actionOnClickTryAgain, this);
			this.btnTryAgain.anchor.set(0.5);
			this.btnTryAgain.visible = false;

			this.btnNextWord = this.add.button(this.world.centerX, this.world.height - 40, 'nextword', this.actionOnClickNextWord, this);
			this.btnNextWord.anchor.set(0.5);
			this.btnNextWord.visible = false;

			this.txtWellDone = this.add.text(570, 150, 'Well Done', {font: "24px Verdana", fill: '#FFFFFF'});
			this.txtWellDone.visible = false;

			this.txtBadDraw = this.add.text(570, 150, 'Bad Draw', {font: "24px Verdana", fill: '#FFFFFF'});
			this.txtBadDraw.visible = false;

			this.imgStarWellDone = this.add.sprite(640, this.world.centerY, 'welldone');
			this.imgStarWellDone.anchor.set(0.5);

			this.background = this.game.add.image(this.world.centerX, this.world.centerY, 'background');
			this.background.anchor.set(0.5);

			this.iconPineapple = this.game.add.image(255, 75, 'iconPineapple');

			this.imgAlphaBet = this.game.add.image(this.world.centerX, 65, 'P');
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
			this.setVisibleAllImages(false);

			//store numbers 1->9 to array
			this.arrImgNumbers.push(this.imgOne, this.imgTwo, this.imgThree, this.imgFour,
				 													this.imgFive, this.imgSix, this.imgSeven, this.imgEight, this.imgNine);

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
					this.imgAlphaBet.visible = false;
					this.iconPineapple.visible = false;
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
			console.log('this.arrTextForDraw: ' + this.arrTextForDraw);
			if(this.arrTextForDraw.length == 0) {
					this.state.start('WordDone');
			}else {
					this.arrResult = [];
					this.bmd.clear();
					this.input.addMoveCallback(this.paint, this);
					this.initWord(this.arrTextForDraw.shift());

					this.btnDone.visible = true;
					this.txtWellDone.visible = false;
					this.btnNextWord.visible = false;

					this.isDrawing = true;
			}
	},

	paint: function(pointer, x, y) {
			if (pointer.isDown)
			{
					//draw only in background
					var minX = this.background.x - this.background.width/2;
					var maxX = this.background.x + this.background.width/2;
					var minY = this.background.y - this.background.height/2;
					var maxY = this.background.y + this.background.height/2;
					if((minX < x && x < maxX) && (minY < y && y < maxY)) {
								this.bmd.circle(x, y, 10, '#00CC00');
					}
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
			console.log('load word: ' + word);
			var jsonObjNumber = this.state.states['Preloader'].jsonObjNumber;
			jsonNumber = JSON.parse(jsonObjNumber);

			this.imgStarWellDone.x = 850;
			this.imgAlphaBet.loadTexture(word);
			this.imgAlphaBet.visible = true;
			this.iconPineapple.visible = true;

			console.log('jsonNumber[word].length = ' + jsonNumber[word].length);
			this.totalNumbers = jsonNumber[word].length;

			for(var i = 0 ; i < jsonNumber[word].length ; i++) {
					this.arrImgNumbers[i]['x'] = jsonNumber[word][i]['x'];
					this.arrImgNumbers[i]['y'] = jsonNumber[word][i]['y'];
					this.arrImgNumbers[i].visible = true;
			}
	}
};
