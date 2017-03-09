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

		this.groupDraw;

		//this.arrImgNumbers = [];

		this.arrResult = [];
		this.totalNumbers;

		//define array save numbers for horver
		this.arrTextForDraw;

		this.bmd;
		this.drawImage;
		this.isDrawing = true;
		this.countDraw = 0;

		this.currentPartWordDrawing = 0;
		this.currentAlphabet = 0;

		//this.dashline;
		this.arrow;
		this.star;
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

			//init word p first
			this.initWord(this.arrTextForDraw.shift());

			this.bmd = this.add.bitmapData(800, 600);
			this.drawImage = this.add.sprite(0, 0, this.bmd);
		  this.input.addMoveCallback(this.paint, this);
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
								this.bmd.circle(x, y, 10, 'rgba(128, 255, 0, 0.1)');
					}
			}
	},

	overNumber: function(obj) {
			if(this.input.mousePointer.isDown && this.arrResult.indexOf(obj) == -1) {
					console.log("overNumber" + obj);
					this.arrResult.push(obj);
					if(this.compareArrays(this.arrResult, [this.imgOne, this.imgTwo, this.imgThree])) {
							console.log("sucess draw");
					}
			}
	},

	compareArrays: function(array1, array2) {
    if (array1.length === array2.length)
        return array1.every((a, index) => a === array2[index]);
    else
        return false;
  },

	update: function() {
	},

	initWord: function(word){
			console.log('load word: ' + word);
			this.currentPartWordDrawing = 0;
			var jsonObjNumber = this.state.states['Preloader'].jsonObjNumber;
			jsonNumber = JSON.parse(jsonObjNumber);

			this.imgAlphaBet = this.game.add.image(this.world.centerX, this.world.centerY, word);
			this.imgAlphaBet.anchor.setTo(0.5, 0.5);

			for(var i = 0 ; i < jsonNumber.length; i ++) {
					console.log("jsonNumber[i].word : " + jsonNumber[i].word);
					if(jsonNumber[i].word === word) {
							this.currentAlphabet = i;
							for(var j = 0 ; j < jsonNumber[i].draw.length ; j++) {
									console.log("jsonNumber[i].draw[j].image : " + jsonNumber[i].draw[j].image);
									var dashline = this.game.add.image(jsonNumber[i].draw[j].x,
																		jsonNumber[i].draw[j].y, jsonNumber[i].draw[j].key);
									dashline.anchor.setTo(0.5, 0.5);
									if(j != 0) {
											dashline.alpha = 0.2;
									}
							}
							console.log("jsonNumber[i].draw[0].x : " + jsonNumber[i].draw[0].x);
							console.log("jsonNumber[i].draw[0].y : " + jsonNumber[i].draw[0].y);
							console.log("jsonNumber[i].draw[0].key : " + jsonNumber[i].draw[0].key);

							this.arrow = this.game.add.image(jsonNumber[i].draw[0].numbers[0].x,
																									jsonNumber[i].draw[0].numbers[0].y, 'arrow');
							this.arrow.anchor.setTo(0, 0.5);
							this.arrow.angle = jsonNumber[i].draw[0].angleArrow;

							var lengthNum = jsonNumber[i].draw[0].numbers.length - 1;
							this.star = this.game.add.image(jsonNumber[i].draw[0].numbers[lengthNum].x,
																									jsonNumber[i].draw[0].numbers[lengthNum].y, 'star');
							this.star.anchor.setTo(0.5, 0.5);
							this.add.tween(this.star).to( { alpha: 0.2 }, 400, "Linear", true ,0 , -1 , true);

							//set position for numbers
							console.log("jsonNumber[i].draw[0].numbers.length: " + jsonNumber[i].draw[0].numbers.length);
							for(var k = 0 ; k < jsonNumber[i].draw[0].numbers.length ; k++) {
									console.log('jsonNumber[i].draw[0].numbers[0].x: ' + jsonNumber[i].draw[0].numbers[k].x);
									console.log('jsonNumber[i].draw[0].numbers[0].y: ' + jsonNumber[i].draw[0].numbers[k].y);
									// this.arrImgNumbers[i].x = jsonNumber[i].draw[0].numbers[k].x;
									// this.arrImgNumbers[i].y = jsonNumber[i].draw[0].numbers[k].y;
							}
					}
			}

			this.imgStarWellDone.x = 850;
			this.imgAlphaBet.loadTexture(word);
			this.imgAlphaBet.visible = true;
			this.iconImg.visible = true;
	}
};
