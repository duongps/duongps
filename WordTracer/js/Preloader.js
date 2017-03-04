WordTrack.Preloader = function(game){
		//local web can not use json file so that temparory use local data
		this.jsonObjNumber = '{"P":[{"name": "imgOne", "x": 325 , "y": 145},\
																{"name": "imgTwo", "x": 325, "y":  265},\
																{"name": "imgThree", "x": 325, "y":  360},\
																{"name": "imgFour", "x": 355, "y":  140},\
																{"name": "imgFive", "x": 407, "y":  145},\
																{"name": "imgSix", "x": 440, "y":  190},\
																{"name": "imgSeven", "x": 418, "y":  248},\
																{"name": "imgEight", "x": 355, "y":  265}],\
													"I":[{"name": "imgOne", "x": 375 , "y": 140},\
																{"name": "imgTwo", "x": 375, "y": 215},\
																{"name": "imgThree", "x": 375, "y": 290},\
																{"name": "imgFour", "x": 375, "y": 365}],\
													"N":[{"name": "imgOne", "x": 310 , "y": 142},\
																{"name": "imgTwo", "x": 310, "y":  260},\
																{"name": "imgThree", "x": 310, "y":  362},\
																{"name": "imgFour", "x": 330, "y":  165},\
																{"name": "imgFive", "x": 420, "y":  340},\
																{"name": "imgSix", "x": 440, "y":  142},\
																{"name": "imgSeven", "x": 440, "y":  260},\
																{"name": "imgEight", "x": 440, "y":  362}],\
													"A":[{"name": "imgOne", "x": 298, "y": 363},\
																{"name": "imgTwo", "x": 330, "y":  260},\
																{"name": "imgThree", "x": 360, "y":  160},\
																{"name": "imgFour", "x": 385, "y":  142},\
																{"name": "imgFive", "x": 420, "y":  260},\
																{"name": "imgSix", "x": 453, "y":  362},\
																{"name": "imgSeven", "x": 350, "y":  287},\
																{"name": "imgEight", "x": 400, "y":  287}],\
													"E":[{"name": "imgOne", "x": 328, "y": 140},\
																{"name": "imgTwo", "x": 328, "y":  250},\
																{"name": "imgThree", "x": 328, "y":  361},\
																{"name": "imgFour", "x": 359, "y":  141},\
																{"name": "imgFive", "x": 430, "y":  143},\
																{"name": "imgSix", "x": 359, "y":  248},\
																{"name": "imgSeven", "x": 425, "y":  247},\
																{"name": "imgEight", "x": 359, "y":  361},\
																{"name": "imgNine", "x": 434, "y":  364}],\
													"L":[{"name": "imgOne", "x": 335 , "y": 140},\
																{"name": "imgTwo", "x": 335, "y":  250},\
																{"name": "imgThree", "x": 335, "y": 362},\
																{"name": "imgFour", "x": 365, "y":  362},\
																{"name": "imgFive", "x": 435, "y":  362}],\
													"C":[{"name": "imgOne", "x": 450 , "y": 145},\
																{"name": "imgTwo", "x": 350, "y":  155},\
																{"name": "imgThree", "x": 305, "y": 250},\
																{"name": "imgFour", "x": 350, "y":  350},\
																{"name": "imgFive", "x": 450, "y":  360}],\
													"R":[{"name": "imgOne", "x": 325 , "y": 145},\
																{"name": "imgTwo", "x": 325, "y":  255},\
																{"name": "imgThree", "x": 325, "y": 360},\
																{"name": "imgFour", "x": 355, "y":  139},\
																{"name": "imgFive", "x": 435, "y":  185},\
																{"name": "imgSix", "x": 355, "y":  257},\
																{"name": "imgSeven", "x": 410, "y":  275},\
																{"name": "imgEight", "x": 442, "y":  365}],\
													"T":[{"name": "imgOne", "x": 310 , "y": 141},\
																{"name": "imgTwo", "x": 375, "y":  141},\
																{"name": "imgThree", "x": 440, "y": 141},\
																{"name": "imgFour", "x": 375, "y":  170},\
																{"name": "imgFive", "x": 375, "y":  265},\
																{"name": "imgSix", "x": 375, "y":  362}],\
													"O":[{"name": "imgOne", "x": 380 , "y": 140},\
																{"name": "imgTwo", "x": 460, "y":  200},\
																{"name": "imgThree", "x": 460, "y": 300},\
																{"name": "imgFour", "x": 380, "y":  367},\
																{"name": "imgFive", "x": 295, "y":  202},\
																{"name": "imgSix", "x": 295, "y":  302}]\
															}';
};

WordTrack.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#FDBF2D';

		this.load.spritesheet('btnStart','img/button.png', 120, 40);

		this.load.image('btnReady', 'img/readytogo.png');
		this.load.image('no1', 'img/no1.png');
		this.load.image('no2', 'img/no2.png');
		this.load.image('no3', 'img/no3.png');
		this.load.image('tick', 'img/tick.png');

		this.load.image('iconPineapple', 'img/iconpineapple.png');

		//add image background
		this.load.image('background', 'img/background.png');
		this.load.image('card', 'img/background/card.png');

		//add image word
		this.load.image('badminton', 'img/word/badminton.png');
		this.load.image('baseball', 'img/word/baseball.png');
		this.load.image('basketball', 'img/word/basketball.png');
		this.load.image('cycling', 'img/word/cycling.png');
		this.load.image('football', 'img/word/football.png');
		this.load.image('golf', 'img/word/golf.png');
		this.load.image('hockey', 'img/word/hockey.png');
		this.load.image('rugby', 'img/word/rugby.png');
		this.load.image('tennis', 'img/word/tennis.png');

		//add image word
		this.load.image('P', 'img/alphabet/P.png');
		this.load.image('I', 'img/alphabet/I.png');
		this.load.image('N', 'img/alphabet/N.png');
		this.load.image('A', 'img/alphabet/A.png');
		this.load.image('E', 'img/alphabet/E.png');
		this.load.image('L', 'img/alphabet/L.png');
		this.load.image('C', 'img/alphabet/C.png');
		this.load.image('R', 'img/alphabet/R.png');
		this.load.image('O', 'img/alphabet/O.png');
		this.load.image('T', 'img/alphabet/T.png');

		//add image number
		this.load.image('img0', 'img/number/0.png');
		this.load.image('img1', 'img/number/1.png');
		this.load.image('img2', 'img/number/2.png');
		this.load.image('img3', 'img/number/3.png');
		this.load.image('img4', 'img/number/4.png');
		this.load.image('img5', 'img/number/5.png');
		this.load.image('img6', 'img/number/6.png');
		this.load.image('img7', 'img/number/7.png');
		this.load.image('img8', 'img/number/8.png');
		this.load.image('img9', 'img/number/9.png');

		this.load.image('done' , 'img/done.png');
		this.load.image('nextword' , 'img/nextword.png');
		this.load.image('tryagain' , 'img/tryagain.png');
		this.load.image('welldone' , 'img/welldone.png');
		this.load.image('btnnextword' , 'img/btnnextword.png');

		//load json data
		//this.load.text('dataNumbers', '/my/numbers.json');
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
