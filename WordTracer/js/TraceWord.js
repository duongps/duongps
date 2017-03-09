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

		this.groupNumbers;
		this.groupDashLines;

		this.arrResult = [];

		//define array save numbers for horver
		this.arrTextForDraw;

		this.bmd;
		this.drawImage;

		this.currentPartWordDrawing = 0;
		this.currentAlphabet = 0;

		//this.dashline;
		this.arrow;
		this.star;
		this.tweenstar;

		this.checkDrawDone = false;
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

			this.imgAlphaBet = this.game.add.image(this.world.centerX, this.world.centerY, 'A');
			this.imgAlphaBet.anchor.set(0.5);

			//add group dashline and numbers
			this.groupDashLines = this.add.group();
			this.groupNumbers = this.add.group();

			this.arrow = this.game.add.image(0, 0, 'arrow');
			this.arrow.anchor.setTo(0, 0.5);
			this.arrow.alpha = 0;

			this.star = this.game.add.image(0, 0, 'star');
			this.star.anchor.set(0.5);
			this.star.alpha = 0;
			this.tweenstar = this.add.tween(this.star).to( { alpha: 0.8 }, 400, "Linear", true ,0 , -1 , true);

			//init word p first
			this.initWord(this.arrTextForDraw.shift());

			this.bmd = this.add.bitmapData(800, 600);
			this.drawImage = this.add.sprite(0, 0, this.bmd);
		  this.input.addMoveCallback(this.paint, this);
	},

	actionOnClickDone: function() {
			if(this.checkDrawDone){
					console.log('well done');
					this.btnDone.visible = false;
					this.txtWellDone.visible = true;
					this.btnNextWord.visible = true;
					this.imgAlphaBet.visible = false;
					this.iconImg.visible = false;
					this.add.tween(this.imgStarWellDone).to( { x: 640 }, 500, "Linear", true);
					this.add.tween(this.imgStarWellDone.scale).to({x: 1.3, y: 1.3}, 700, "Linear", true, 0 , -1, true);
			}else {
					console.log('bad draw');
					this.btnDone.visible = false;
					this.txtBadDraw.visible = true;
					this.btnTryAgain.visible = true;
			}
	},

	actionOnClickTryAgain: function() {
			this.arrResult = [];
			this.bmd.clear();
			this.input.addMoveCallback(this.paint, this);

			this.btnDone.visible = true;
			this.txtBadDraw.visible = false;
			this.btnTryAgain.visible = false;
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
								this.bmd.circle(x, y, 10, 'rgba(255,0,255,0.1)');
					}
			}
	},

	overNumber: function(obj) {
			var index = this.groupNumbers.getIndex(obj);
			if(this.input.mousePointer.isDown && this.arrResult.indexOf(index) == -1) {
					this.arrResult.push(index);

					var jsonObjNumber = this.state.states['Preloader'].jsonObjNumber;
					jsonNumber = JSON.parse(jsonObjNumber);

					if(this.compareArrays(this.arrResult, [0, 1, 2])) {
							console.log("sucess draw");
							this.arrResult = [];
							this.currentPartWordDrawing++;
							if(this.currentPartWordDrawing < jsonNumber[this.currentAlphabet].draw.length) {
									this.arrow.alpha = 1;
									this.arrow.x = jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].numbers[0].x;
									this.arrow.y = jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].numbers[0].y;
									this.arrow.angle = jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].angleArrow;

									this.star.alpha = 1;
									this.star.x = jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].numbers[2].x;
									this.star.y = jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].numbers[2].y;

									this.groupDashLines.removeChildAt(0);
									this.groupDashLines.getChildAt(0).alpha = 1;

									for(var i = 0 ; i < 3 ; i++) {
											this.groupNumbers.getChildAt(i).x =
															jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].numbers[i].x;
											this.groupNumbers.getChildAt(i).y =
															jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].numbers[i].y;
									}
							}else {
									this.checkDrawDone = true;
									this.groupNumbers.removeAll();
									this.groupDashLines.removeAll();
									this.tweenstar.stop();
									this.arrow.alpha = 0;
									this.star.alpha = 0;
							}
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
			this.checkDrawDone = false;
			var jsonObjNumber = this.state.states['Preloader'].jsonObjNumber;
			jsonNumber = JSON.parse(jsonObjNumber);

			for(var i = 0 ; i < jsonNumber.length; i ++) {
					console.log("jsonNumber[i].word : " + jsonNumber[i].word);
					if(jsonNumber[i].word === word) {
							this.currentAlphabet = i;
							for(var j = 0 ; j < jsonNumber[i].draw.length ; j++) {
									//console.log("jsonNumber[i].draw[j].image : " + jsonNumber[i].draw[j].image);
									var dashline = this.groupDashLines.create(jsonNumber[i].draw[j].x,
																		jsonNumber[i].draw[j].y, jsonNumber[i].draw[j].key);
									dashline.anchor.set(0.5);
									if(j != 0) {
											dashline.alpha = 0.2;
									}
							}
							//console.log("jsonNumber[i].draw[0].key : " + jsonNumber[i].draw[0].key);
							this.arrow.alpha = 1;
							this.arrow.x = jsonNumber[i].draw[0].numbers[0].x;
							this.arrow.y = jsonNumber[i].draw[0].numbers[0].y;
							this.arrow.angle = jsonNumber[i].draw[0].angleArrow;

							this.star.alpha = 1;
							var lengthNum = jsonNumber[i].draw[0].numbers.length - 1;
							this.star.x = jsonNumber[i].draw[0].numbers[lengthNum].x;
							this.star.y = jsonNumber[i].draw[0].numbers[lengthNum].y;

							//set position for numbers
							for(var k = 0 ; k < jsonNumber[i].draw[0].numbers.length ; k++) {
									var number = this.groupNumbers.create(jsonNumber[i].draw[0].numbers[k].x,
																		jsonNumber[i].draw[0].numbers[k].y, k + 1);
									number.anchor.set(0.5);
									number.inputEnabled = true;
									number.events.onInputDown.add(this.overNumber, this);
									number.events.onInputOver.add(this.overNumber, this);
									number.alpha = 0;
							}
					}
			}

			this.imgStarWellDone.x = 850;
			this.imgAlphaBet.loadTexture(word);
			this.imgAlphaBet.visible = true;
			this.iconImg.visible = true;
	}
};
