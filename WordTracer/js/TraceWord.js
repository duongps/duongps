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
		this.iconImg;
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

			//add line trainning
			var line = this.add.image(this.world.centerX , 36, 'lineTranning');
			line.anchor.set(0.5);

			this.btnDone = this.add.button(this.world.centerX, this.world.height - 40,
																		 		'btnDone', this.actionOnClickDone, this, 1, 0, 2);
			this.btnDone.anchor.set(0.5);


			this.btnTryAgain = this.add.button(this.world.centerX, this.world.height - 40,
				 																		'btnTryAgain', this.actionOnClickTryAgain, this, 1, 0, 2);
			this.btnTryAgain.anchor.set(0.5);
			this.btnTryAgain.visible = false;

			this.btnNextWord = this.add.button(this.world.centerX, this.world.height - 40, 'btnNextWord', this.actionOnClickNextWord, this);
			this.btnNextWord.anchor.set(0.5);
			this.btnNextWord.visible = false;

			this.txtWellDone = this.add.text(570, 150, 'Well Done', {font: "24px Verdana", fill: '#FFFFFF'});
			this.txtWellDone.visible = false;

			this.txtBadDraw = this.add.text(570, 150, 'Bad Draw', {font: "24px Verdana", fill: '#FFFFFF'});
			this.txtBadDraw.visible = false;

			this.imgStarWellDone = this.add.sprite(640, this.world.centerY, 'welldone');
			this.imgStarWellDone.anchor.set(0.5);

			this.background = this.game.add.image(this.world.centerX, this.world.centerY, 'card');
			this.background.anchor.set(0.5);
			this.background.scale.set(1.2);

			this.iconImg = this.game.add.image(265, 80, this.state.states['MainMenu'].wordDraw);
			this.iconImg.scale.set(0.5);

			this.imgAlphaBet = this.game.add.image(this.world.centerX, this.world.centerY, 'P');
			this.imgAlphaBet.anchor.setTo(0.5, 0.5);
			var dashline = this.game.add.image(this.world.centerX - 5, this.world.centerY - 13.75, 'dashlineC');
			dashline.anchor.setTo(0.5, 0.5);
			var arrow = this.game.add.image(460, 145, 'arrow');
			arrow.anchor.setTo(0, 0.5);
			arrow.angle = 190;
			var star = this.game.add.image(449, 328, 'star');
			star.anchor.setTo(0.5, 0.5);
			this.add.tween(star).to( { alpha: 0.2 }, 400, "Linear", true ,0 , -1 , true);

			//add all image number from 1 to 9 and set visible to false
			this.addImageNumbers();

			//init word p first
			this.initWord(this.arrTextForDraw.shift());

			this.bmd = this.add.bitmapData(800, 600);
			this.drawImage = this.add.sprite(0, 0, this.bmd);
		  this.input.addMoveCallback(this.paint, this);
	},

	addImageNumbers: function() {
			//store numbers 1->9 to array
			this.arrImgNumbers.push(this.imgOne, this.imgTwo, this.imgThree, this.imgFour,
				 													this.imgFive, this.imgSix, this.imgSeven, this.imgEight, this.imgNine);

			for(var i = 0 ; i < this.arrImgNumbers.length ; i++) {
					this.arrImgNumbers[i] = this.add.sprite(0, 0, i + 1);
					this.arrImgNumbers[i].anchor.set(0.5);
					this.arrImgNumbers[i].inputEnabled = true;
					this.arrImgNumbers[i].events.onInputDown.add(this.overNumber, this);
					this.arrImgNumbers[i].events.onInputOver.add(this.overNumber, this);
			}
	},

	actionOnClickDone: function() {
			if(this.arrResult.length == this.totalNumbers){
					console.log('well done');
					this.btnDone.visible = false;
					this.txtWellDone.visible = true;
					this.btnNextWord.visible = true;
					this.imgAlphaBet.visible = false;
					this.iconImg.visible = false;
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
			this.iconImg.visible = true;

			console.log('jsonNumber[word].length = ' + jsonNumber[word].length);
			this.totalNumbers = jsonNumber[word].length;

			for(var i = 0 ; i < jsonNumber[word].length ; i++) {
					console.log('test :' + i);
					this.arrImgNumbers[i]['x'] = jsonNumber[word][i]['x'];
					this.arrImgNumbers[i]['y'] = jsonNumber[word][i]['y'];
					//this.arrImgNumbers[i].visible = true;
			}
	}
};
