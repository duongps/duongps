WordTrack.TraceWord = function(game){
		this.wordDraw;
		this.wordDrawing;
		this.arrTextForDraw = [];

		this.txtWellDone;
		this.txtBadDraw;
		this.imgStarWellDone;

		this.imgAlphaBet;
		this.iconImg;
		this.background;

		this.groupNumbers;
		this.groupDashLines;
		this.groupPencils;

		this.arrResult = [];
		this.arrTotalNumber = [];

		//define array save numbers for horver
		this.arrTextForDraw;

		this.bmd;
		this.drawImage;
		this.colorDrawing = '#FF9999';

		this.currentPartWordDrawing = 0;
		this.currentAlphabet = 0;

		this.checkDrawDone = false;
		this.distanceHeihtWord = 15;

		this.music;
};

WordTrack.TraceWord.prototype = {
	create: function(){
			this.wordDraw = this.state.states['Game'].wordDraw;
			this.arrTextForDraw = Array.from(this.wordDraw);
			//add text
			var textWordTrace = this.add.text(this.world.centerX, 5, 'Word	Tracer', {font: "20px Verdana", fill: '#FFFFFF'});
			textWordTrace.anchor.setTo(0.5, 0);

			this.wordDrawing = this.add.text(this.world.centerX, 40, this.wordDraw, {font: "23px Verdana", fill: '#FFFFFF'});
			this.wordDrawing.anchor.setTo(0.5, 0);
			this.wordDrawing.addColor('#FCEE21', 0); //yellow color
			this.wordDrawing.addColor('#FFFFFF', 1); //white color

			//draw line
			this.drawLine();

			var btnTryAgain = this.add.image(this.world.centerX - 40, this.world.height - 40,'btnreload');
			btnTryAgain.anchor.set(0.5);
			btnTryAgain.inputEnabled = true;
			btnTryAgain.events.onInputDown.add(this.actionOnClickTryAgain, this);
			btnTryAgain.events.onInputOver.add(this.actionOverButton, this);
			btnTryAgain.events.onInputOut.add(this.actionOutButton, this);

			var btnNextWord = this.add.image(this.world.centerX + 40, this.world.height - 40, 'btnnext');
			btnNextWord.anchor.set(0.5);
			btnNextWord.inputEnabled = true;
			btnNextWord.events.onInputDown.add(this.actionOnClickNextWord, this);
			btnNextWord.events.onInputOver.add(this.actionOverButtonNext, this);
			btnNextWord.events.onInputOut.add(this.actionOutButton, this);

			this.txtWellDone = this.add.text(570, 150, 'Well Done', {font: "24px Verdana", fill: '#FFFFFF'});
			this.txtWellDone.visible = false;

			this.txtBadDraw = this.add.text(570, 150, 'Bad Draw', {font: "24px Verdana", fill: '#FFFFFF'});
			this.txtBadDraw.visible = false;

			this.imgStarWellDone = this.add.sprite(640, this.world.centerY, 'welldone');
			this.imgStarWellDone.anchor.set(0.5);

			this.background = this.game.add.image(this.world.centerX, this.world.centerY, 'card');
			this.background.anchor.set(0.5);
			this.background.scale.set(1.2);

			this.iconImg = this.game.add.image(265, 80, this.wordDraw);
			this.iconImg.scale.set(0.39);

			this.imgAlphaBet = this.game.add.image(this.world.centerX, this.world.centerY + this.distanceHeihtWord, 'A');
			this.imgAlphaBet.anchor.set(0.5);

			this.bmd = this.add.bitmapData(this.background.width, this.background.height);
			//this.bmd.fill(51, 255, 255, 1);
			this.drawImage = this.add.sprite(this.world.centerX, this.world.centerY, this.bmd);
			this.drawImage.anchor.set(0.5);
		  this.input.addMoveCallback(this.paint, this);

			//add group dashline and numbers
			this.groupDashLines = this.add.group();
			this.groupNumbers = this.add.group();

			//init word p first
			this.initWord(this.arrTextForDraw.shift());

			this.addPencilColors();

			this.music = this.add.audio('soundMoonlight');
			this.music.play();
	},

	drawLine: function(){
			var graphics = this.add.graphics(0, 0);
			graphics.lineStyle(8, 0xFFFFFF);
			graphics.moveTo((this.world.width - 650) / 2,36);
			graphics.lineTo((this.world.width + 650) / 2, 36);

			graphics.lineStyle(8, 0xFCEE21);
			graphics.moveTo((this.world.width - 650) / 2,36);
			graphics.lineTo((this.world.width + 650) / 2 * ((3 - this.state.states['MainMenu'].arrWordDraw.length) / 3), 36);

			window.graphics = graphics;
	},

	addPencilColors: function() {
			this.groupPencils = this.add.group();
			//var space = 60;
			var penX = 90;
			var penY = this.world.height - 70;
			var penLightPink = this.groupPencils.create(penX, penY, 'penlightpink');
			penLightPink.anchor.set(0.5);
			var penOrange = this.groupPencils.create(penLightPink.x + penLightPink.width, penY, 'penorange');
			penOrange.anchor.set(0.5);
			var penBlue = this.groupPencils.create(penOrange.x + penOrange.width, penY, 'penblue');
			penBlue.anchor.set(0.5);
			var penGreen = this.groupPencils.create(penBlue.x + penBlue.width, penY, 'pengreen');
			penGreen.anchor.set(0.5);
			var penPink = this.groupPencils.create(penGreen.x + penGreen.width, penY, 'penpink');
			penPink.anchor.set(0.5);
			var penRed = this.groupPencils.create(penPink.x + penPink.width, penY, 'penred');
			penRed.anchor.set(0.5);
			var penViolet = this.groupPencils.create(penRed.x + penRed.width, penY, 'penviolet');
			penViolet.anchor.set(0.5);

			penLightPink.inputEnabled = true;
			penOrange.inputEnabled = true;
			penBlue.inputEnabled = true;
			penGreen.inputEnabled = true;
			penPink.inputEnabled = true;
			penRed.inputEnabled = true;
			penViolet.inputEnabled = true;

			penLightPink.events.onInputDown.add(this.actionClickPencil, this);
			penOrange.events.onInputDown.add(this.actionClickPencil, this);
			penBlue.events.onInputDown.add(this.actionClickPencil, this);
			penGreen.events.onInputDown.add(this.actionClickPencil, this);
			penPink.events.onInputDown.add(this.actionClickPencil, this);
			penRed.events.onInputDown.add(this.actionClickPencil, this);
			penViolet.events.onInputDown.add(this.actionClickPencil, this);
	},

	actionClickPencil: function(obj) {
			var indexPenClicked = this.groupPencils.getIndex(obj);
			switch (indexPenClicked) {
				case 0:
						this.colorDrawing = '#FF9999'; //orange
					break;
				case 1:
						this.colorDrawing = '#FF931E'; //orange
					break;
				case 2:
						this.colorDrawing = '#0000FF'; //blue
					break;
				case 3:
						this.colorDrawing = '#00FF00'; //green
					break;
				case 4:
						this.colorDrawing = '#FF00FF'; //pink
					break;
				case 5:
						this.colorDrawing = '#FF0000'; //red
					break;
				case 6:
						this.colorDrawing = '#662D91'; //violet
					break;
				default:
			}

			//set other pecil to default scale
			for(var i = 0 ; i < this.groupPencils.total ; i++) {
					this.groupPencils.getChildAt(i).y = this.world.height - 70;
			}

			//change scale of pencil clicked
			obj.y = obj.y - 20;
	},

	actionOverButtonNext: function(obj) {
			if(this.checkDrawDone) {
					obj.scale.set(1.1);
			}
	},

	actionOverButton: function(obj) {
			obj.scale.set(1.1);
	},

	actionOutButton: function(obj) {
			obj.scale.set(1);
	},

	actionOnClickTryAgain: function() {
			if(!this.checkDrawDone) {
					this.arrResult = [];
					this.currentPartWordDrawing = 0;
					this.bmd.clear();
					this.input.addMoveCallback(this.paint, this);

					this.groupDashLines.getChildAt(0).alpha = 1;
					for(i = 1 ; i < this.groupDashLines.total ; i++) {
							this.groupDashLines.getChildAt(i).alpha = 0;
					}

					//set position for numbers
					this.groupNumbers.removeAll();
					this.arrTotalNumber = [];
					for(var k = 0 ; k < jsonNumber[this.currentAlphabet].draw[0].numbers.length ; k++) {
							this.arrTotalNumber.push(k);
							var number = this.groupNumbers.create(
											jsonNumber[this.currentAlphabet].draw[0].numbers[k].x,
											jsonNumber[this.currentAlphabet].draw[0].numbers[k].y, k + 1);
							number.anchor.set(0.5);
							number.inputEnabled = true;
							number.events.onInputDown.add(this.overNumber, this);
							number.events.onInputOver.add(this.overNumber, this);
							number.alpha = 0;
					}
			}
	},

	actionOnClickNextWord: function() {
			if(this.checkDrawDone) {
					if(this.arrTextForDraw.length == 0) {
							this.state.start('WordDone');
					}else {
							this.arrResult = [];
							this.bmd.clear();
							this.input.addMoveCallback(this.paint, this);
							this.initWord(this.arrTextForDraw.shift());

							this.txtWellDone.visible = false;

							if(typeof this.wordDrawing != "undefined") {
									this.wordDrawing.clearColors();
									this.wordDrawing.addColor('#FCEE21', 0); //yellow color
									this.wordDrawing.addColor('#FFFFFF', this.wordDraw.length - this.arrTextForDraw.length); //white color
							}
					}
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
							this.bmd.circle(x - minX, y - minY, 10, this.colorDrawing);
					}
			}
	},

	overNumber: function(obj) {
			var index = this.groupNumbers.getIndex(obj);
			if(this.input.mousePointer.isDown && this.arrResult.indexOf(index) == -1) {
					if(this.arrResult.length === 0) {
							if(index === 0) {
									this.arrResult.push(index);
							}
					}else if(this.arrResult.length > 0) {
							if(this.arrResult[this.arrResult.length - 1] === index - 1) {
									this.arrResult.push(index);
							}
					}

					var jsonObjNumber = this.state.states['Preloader'].jsonObjNumber;
					jsonNumber = JSON.parse(jsonObjNumber);

					if(this.compareArrays(this.arrResult, this.arrTotalNumber)) {
							this.arrResult = [];
							this.currentPartWordDrawing++;
							if(this.currentPartWordDrawing < jsonNumber[this.currentAlphabet].draw.length) {
									for (var i = 0 ; i < this.groupDashLines.total ; i++) {
											if(this.currentPartWordDrawing === i) {
													//this.groupDashLines.getChildAt(i).alpha = 1;
													this.add.tween(this.groupDashLines.getChildAt(i)).to( { alpha: 1 }, 800, "Linear", true);
											}else{
													this.groupDashLines.getChildAt(i).alpha = 0;
											}
									}

									//set position for numbers
									this.groupNumbers.removeAll();
									this.arrTotalNumber = [];
									for(var k = 0 ; k < jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].numbers.length ; k++) {
											this.arrTotalNumber.push(k);
											var number = this.groupNumbers.create(
															jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].numbers[k].x,
															jsonNumber[this.currentAlphabet].draw[this.currentPartWordDrawing].numbers[k].y
																		+ this.distanceHeihtWord, k + 1);
											number.anchor.set(0.5);
											number.inputEnabled = true;
											number.events.onInputDown.add(this.overNumber, this);
											number.events.onInputOver.add(this.overNumber, this);
											number.alpha = 0;
									}
							}else {
									this.checkDrawDone = true;
									this.groupNumbers.removeAll();
									this.groupDashLines.removeAll();

									this.txtWellDone.visible = true;
									this.imgAlphaBet.visible = false;
									this.iconImg.visible = false;
									this.add.tween(this.imgStarWellDone).to( { x: 640 }, 500, "Linear", true);
									this.add.tween(this.imgStarWellDone.scale).to({x: 1.3, y: 1.3}, 700, "Linear", true, 0 , -1, true);

									var texture = this.bmd.generateTexture("export" + jsonNumber[this.currentAlphabet].word);
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
			this.checkDrawDone = false;
			this.currentPartWordDrawing = 0;
			var jsonObjNumber = this.state.states['Preloader'].jsonObjNumber;
			jsonNumber = JSON.parse(jsonObjNumber);

			for(var i = 0 ; i < jsonNumber.length; i ++) {
					if(jsonNumber[i].word === word) {
							this.currentAlphabet = i;
							for(var j = 0 ; j < jsonNumber[i].draw.length ; j++) {
									var dashline = this.groupDashLines.create(jsonNumber[i].draw[j].x,
																		jsonNumber[i].draw[j].y + this.distanceHeihtWord, jsonNumber[i].draw[j].key);
									dashline.anchor.set(0.5);
									dashline.alpha = 0;

									if(j == 0) {
											this.add.tween(dashline).to( { alpha: 1 }, 800, "Linear", true);
									}
							}

							//set position for numbers
							this.arrTotalNumber = [];
							for(var k = 0 ; k < jsonNumber[i].draw[0].numbers.length ; k++) {
									this.arrTotalNumber.push(k);
									var number = this.groupNumbers.create(jsonNumber[i].draw[0].numbers[k].x,
																		jsonNumber[i].draw[0].numbers[k].y + this.distanceHeihtWord, k + 1);
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
