WordTrack.Preloader = function(game){
		//local web can not use json file so that temparory use local data
		this.jsonObjNumber = '{"A":[{"name": "imgOne", "x": 298, "y": 363},\
																{"name": "imgTwo", "x": 330, "y":  260},\
																{"name": "imgThree", "x": 360, "y":  160},\
																{"name": "imgFour", "x": 385, "y":  142},\
																{"name": "imgFive", "x": 420, "y":  260},\
																{"name": "imgSix", "x": 453, "y":  362},\
																{"name": "imgSeven", "x": 350, "y":  287},\
																{"name": "imgEight", "x": 400, "y":  287}],\
													"B":[{"name": "imgOne", "x": 328, "y": 132},\
																{"name": "imgTwo", "x": 328, "y":  222},\
																{"name": "imgThree", "x": 328, "y":  322},\
																{"name": "imgFour", "x": 357, "y":  129},\
																{"name": "imgFive", "x": 425, "y":  165},\
																{"name": "imgSix", "x": 355, "y":  222},\
																{"name": "imgSeven", "x": 407, "y":  232},\
																{"name": "imgEight", "x": 425, "y":  300},\
																{"name": "imgNine", "x": 357, "y":  325}],\
													"C":[{"name": "imgOne", "x": 449 , "y": 142},\
																{"name": "imgTwo", "x": 344, "y":  156},\
																{"name": "imgThree", "x": 309, "y": 241},\
																{"name": "imgFour", "x": 344, "y":  316},\
																{"name": "imgFive", "x": 449, "y":  328}],\
													"D":[{"name": "imgOne", "x": 308 , "y": 133},\
																{"name": "imgTwo", "x": 308, "y":  230},\
																{"name": "imgThree", "x": 308, "y": 323},\
																{"name": "imgFour", "x": 337, "y":  129},\
																{"name": "imgFive", "x": 425, "y":  150},\
																{"name": "imgSix", "x": 452, "y":  230},\
																{"name": "imgSeven", "x": 416, "y":  308},\
																{"name": "imgEight", "x": 337, "y":  327}],\
													"E":[{"name": "imgOne", "x": 328, "y": 141},\
																{"name": "imgTwo", "x": 328, "y":  248},\
																{"name": "imgThree", "x": 328, "y":  362},\
																{"name": "imgFour", "x": 359, "y":  141},\
																{"name": "imgFive", "x": 430, "y":  141},\
																{"name": "imgSix", "x": 359, "y":  248},\
																{"name": "imgSeven", "x": 425, "y":  247},\
																{"name": "imgEight", "x": 359, "y":  362},\
																{"name": "imgNine", "x": 434, "y":  362}],\
													"F":[{"name": "imgOne", "x": 337 , "y": 131},\
																{"name": "imgTwo", "x": 337, "y":  227},\
																{"name": "imgThree", "x": 337, "y": 322},\
																{"name": "imgFour", "x": 365, "y":  131},\
																{"name": "imgFive", "x": 422, "y":  131},\
																{"name": "imgSix", "x": 365, "y":  227},\
																{"name": "imgSeven", "x": 418, "y":  227}],\
													"G":[{"name": "imgOne", "x": 435 , "y": 135},\
																{"name": "imgTwo", "x": 335, "y":  147},\
																{"name": "imgThree", "x": 300, "y": 227},\
																{"name": "imgFour", "x": 330, "y":  307},\
																{"name": "imgFive", "x": 420, "y":  323},\
																{"name": "imgSix", "x": 402, "y":  232},\
																{"name": "imgSeven", "x": 445, "y":  234},\
																{"name": "imgEight", "x": 445, "y":  312}],\
													"H":[{"name": "imgOne", "x": 310 , "y": 133},\
																{"name": "imgTwo", "x": 310, "y":  223},\
																{"name": "imgThree", "x": 310, "y": 322},\
																{"name": "imgFour", "x": 440, "y":  133},\
																{"name": "imgFive", "x": 440, "y":  223},\
																{"name": "imgSix", "x": 440, "y":  322},\
																{"name": "imgSeven", "x": 338, "y":  223},\
																{"name": "imgEight", "x": 412, "y":  223}],\
													"I":[{"name": "imgOne", "x": 375 , "y": 140},\
																{"name": "imgTwo", "x": 375, "y": 215},\
																{"name": "imgThree", "x": 375, "y": 290},\
																{"name": "imgFour", "x": 375, "y": 365}],\
													"J":[{"name": "imgOne", "x": 398, "y": 130},\
																{"name": "imgTwo", "x": 398, "y":  210},\
																{"name": "imgThree", "x": 395, "y": 290},\
																{"name": "imgFour", "x": 330, "y":  325}],\
													"K":[{"name": "imgOne", "x": 325, "y": 133},\
																{"name": "imgTwo", "x": 325, "y":  230},\
																{"name": "imgThree", "x": 325, "y": 322},\
																{"name": "imgFour", "x": 353, "y":  225},\
																{"name": "imgFive", "x": 427, "y":  133},\
																{"name": "imgSix", "x": 380, "y":  238},\
																{"name": "imgSeven", "x": 435, "y":  322}],\
													"L":[{"name": "imgOne", "x": 335 , "y": 140},\
																{"name": "imgTwo", "x": 335, "y":  250},\
																{"name": "imgThree", "x": 335, "y": 362},\
																{"name": "imgFour", "x": 365, "y":  362},\
																{"name": "imgFive", "x": 435, "y":  362}],\
													"M":[{"name": "imgOne", "x": 303 , "y": 133},\
																{"name": "imgTwo", "x": 298, "y": 235},\
																{"name": "imgThree", "x": 293, "y": 322},\
																{"name": "imgFour", "x": 323, "y": 154},\
																{"name": "imgFive", "x": 372, "y": 322},\
																{"name": "imgSix", "x": 427, "y": 154},\
																{"name": "imgSeven", "x": 447, "y": 133},\
																{"name": "imgEight", "x": 454, "y": 235},\
																{"name": "imgNine", "x": 460, "y": 322}],\
													"N":[{"name": "imgOne", "x": 310 , "y": 142},\
																{"name": "imgTwo", "x": 310, "y":  260},\
																{"name": "imgThree", "x": 310, "y":  362},\
																{"name": "imgFour", "x": 330, "y":  165},\
																{"name": "imgFive", "x": 420, "y":  340},\
																{"name": "imgSix", "x": 440, "y":  142},\
																{"name": "imgSeven", "x": 440, "y":  260},\
																{"name": "imgEight", "x": 440, "y":  362}],\
													"O":[{"name": "imgOne", "x": 361 , "y": 138},\
																{"name": "imgTwo", "x": 295, "y":  202},\
																{"name": "imgThree", "x": 295, "y":  302},\
																{"name": "imgFour", "x": 380, "y":  367},\
																{"name": "imgFive", "x": 460, "y": 300},\
																{"name": "imgSix", "x": 460, "y":  202},\
																{"name": "imgSeven", "x": 389, "y":  138}],\
													"P":[{"name": "imgOne", "x": 325 , "y": 145},\
																{"name": "imgTwo", "x": 325, "y":  265},\
																{"name": "imgThree", "x": 325, "y":  360},\
																{"name": "imgFour", "x": 355, "y":  140},\
																{"name": "imgFive", "x": 407, "y":  145},\
																{"name": "imgSix", "x": 440, "y":  190},\
																{"name": "imgSeven", "x": 418, "y":  248},\
																{"name": "imgEight", "x": 355, "y":  265}],\
													"Q":[{"name": "imgOne", "x": 367 , "y": 128},\
																{"name": "imgTwo", "x": 308, "y":  190},\
																{"name": "imgThree", "x": 307, "y":  273},\
																{"name": "imgFour", "x": 375, "y":  328},\
																{"name": "imgFive", "x": 440, "y":  273},\
																{"name": "imgSix", "x": 443, "y":  190},\
																{"name": "imgSeven", "x": 395, "y":  128},\
																{"name": "imgEight", "x": 400, "y":  338},\
																{"name": "imgNine", "x": 445, "y":  353}],\
													"R":[{"name": "imgOne", "x": 325 , "y": 145},\
																{"name": "imgTwo", "x": 325, "y":  255},\
																{"name": "imgThree", "x": 325, "y": 360},\
																{"name": "imgFour", "x": 355, "y":  139},\
																{"name": "imgFive", "x": 435, "y":  185},\
																{"name": "imgSix", "x": 355, "y":  257},\
																{"name": "imgSeven", "x": 410, "y":  275},\
																{"name": "imgEight", "x": 442, "y":  365}],\
													"S":[{"name": "imgOne", "x": 410 , "y": 135},\
																{"name": "imgTwo", "x": 333, "y":  170},\
																{"name": "imgThree", "x": 382, "y": 228},\
																{"name": "imgFour", "x": 410, "y":  305},\
																{"name": "imgFive", "x": 330, "y":  320}],\
													"T":[{"name": "imgOne", "x": 310 , "y": 141},\
																{"name": "imgTwo", "x": 375, "y":  141},\
																{"name": "imgThree", "x": 440, "y": 141},\
																{"name": "imgFour", "x": 375, "y":  170},\
																{"name": "imgFive", "x": 375, "y":  265},\
																{"name": "imgSix", "x": 375, "y":  362}],\
													"U":[{"name": "imgOne", "x": 319 , "y": 130},\
																{"name": "imgTwo", "x": 319, "y":  230},\
																{"name": "imgThree", "x": 375, "y": 328},\
																{"name": "imgFour", "x": 435, "y":  230},\
																{"name": "imgFive", "x": 431, "y":  130}],\
													"V":[{"name": "imgOne", "x": 315 , "y": 132},\
																{"name": "imgTwo", "x": 340, "y":  230},\
																{"name": "imgThree", "x": 373, "y": 323},\
																{"name": "imgFour", "x": 407, "y":  230},\
																{"name": "imgFive", "x": 435, "y":  132}],\
													"W":[{"name": "imgOne", "x": 280 , "y": 130},\
																{"name": "imgTwo", "x": 300, "y":  230},\
																{"name": "imgThree", "x": 325, "y": 323},\
																{"name": "imgFour", "x": 350, "y":  230},\
																{"name": "imgFive", "x": 377, "y":  130},\
																{"name": "imgSix", "x": 400, "y":  230},\
																{"name": "imgSeven", "x": 423, "y":  323},\
																{"name": "imgEight", "x": 450, "y":  230},\
																{"name": "imgNight", "x": 473, "y":  130}],\
													"X":[{"name": "imgOne", "x": 327 , "y": 131},\
																{"name": "imgTwo", "x": 375, "y":  230},\
																{"name": "imgThree", "x": 427, "y": 325},\
																{"name": "imgFour", "x": 425, "y":  131},\
																{"name": "imgFive", "x": 386, "y":  204},\
																{"name": "imgSix", "x": 326, "y":  325}],\
													"Y":[{"name": "imgOne", "x": 324, "y": 130},\
																{"name": "imgTwo", "x": 362, "y":  218},\
																{"name": "imgThree", "x": 430, "y": 130},\
																{"name": "imgFour", "x": 390, "y":  215},\
																{"name": "imgFive", "x": 375, "y":  243},\
																{"name": "imgSix", "x": 375, "y":  325}],\
													"Z":[{"name": "imgOne", "x": 330 , "y": 130},\
																{"name": "imgTwo", "x": 397, "y":  130},\
																{"name": "imgThree", "x": 425, "y": 130},\
																{"name": "imgFour", "x": 375, "y":  225},\
																{"name": "imgFive", "x": 323, "y":  323},\
																{"name": "imgSix", "x": 351, "y":  323},\
																{"name": "imgSeven", "x": 427, "y":  323}]\
															}';

				this.jsonObjWord = '{"word":[\
																	    {"text":"BADMINTON", "image": "badminton.png"},\
																	    {"text":"BASEBALL", "image": "baseball.png"},\
																			{"text":"BASKETBALL", "image": "basketball.png"},\
																			{"text":"CYCLING", "image": "cycling.png"},\
																			{"text":"FOOTBALL", "image": "football.png"},\
																			{"text":"GOLF", "image": "golf.png"},\
																			{"text":"HOCKEY", "image": "hockey.png"},\
																			{"text":"RUGBY", "image": "rugby.png"},\
																			{"text":"TENNIS", "image": "tennis.png"}\
																	 ]}';
};

WordTrack.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#2FC8DD';

		this.load.spritesheet('btnStart','img/button/btnstart.png', 220, 50);
		this.load.spritesheet('btnReady', 'img/button/btnreadytogo.png', 220, 50);
		this.load.spritesheet('btnDone' , 'img/button/btndone.png', 220, 50);
		this.load.spritesheet('btnTryAgain' , 'img/button/btntryagain.png', 220, 50);
		this.load.spritesheet('btnNextWord' , 'img/button/btnnextword.png', 220, 50);

		this.load.image('welldone' , 'img/welldone.png');
		this.load.image('tick', 'img/tick.png');
		this.load.image('lineTranning', 'img/linetranning.png');

		//add image background
		this.load.image('card', 'img/background/card.png');

		var jsonObjWord = this.jsonObjWord;
		jsonWord = JSON.parse(jsonObjWord);
		//add image word
		for(var i = 0 ; i < jsonWord.word.length ; i++) {
				this.load.image(jsonWord.word[i].text, 'img/word/' + jsonWord.word[i].image);
		}

		//add image word
		this.load.image('A', 'img/alphabet/A.png');
		this.load.image('B', 'img/alphabet/B.png');

		this.load.image('C', 'img/alphabet/C.png');
		this.load.image('dashlineC', 'img/alphabet/dashlineC.png');

		this.load.image('D', 'img/alphabet/D.png');
		this.load.image('E', 'img/alphabet/E.png');
		this.load.image('F', 'img/alphabet/F.png');
		this.load.image('G', 'img/alphabet/G.png');
		this.load.image('H', 'img/alphabet/H.png');
		this.load.image('I', 'img/alphabet/I.png');
		this.load.image('J', 'img/alphabet/J.png');
		this.load.image('K', 'img/alphabet/K.png');
		this.load.image('L', 'img/alphabet/L.png');
		this.load.image('M', 'img/alphabet/M.png');
		this.load.image('N', 'img/alphabet/N.png');
		this.load.image('O', 'img/alphabet/O.png');
		this.load.image('P', 'img/alphabet/P.png');
		this.load.image('Q', 'img/alphabet/Q.png');
		this.load.image('R', 'img/alphabet/R.png');
		this.load.image('S', 'img/alphabet/S.png');
		this.load.image('T', 'img/alphabet/T.png');
		this.load.image('U', 'img/alphabet/U.png');
		this.load.image('V', 'img/alphabet/V.png');
		this.load.image('W', 'img/alphabet/W.png');
		this.load.image('X', 'img/alphabet/X.png');
		this.load.image('Y', 'img/alphabet/Y.png');
		this.load.image('Z', 'img/alphabet/Z.png');

		//add image number
		this.load.image('0', 'img/number/0.png');
		this.load.image('1', 'img/number/1.png');
		this.load.image('2', 'img/number/2.png');
		this.load.image('3', 'img/number/3.png');
		this.load.image('4', 'img/number/4.png');
		this.load.image('5', 'img/number/5.png');
		this.load.image('6', 'img/number/6.png');
		this.load.image('7', 'img/number/7.png');
		this.load.image('8', 'img/number/8.png');
		this.load.image('9', 'img/number/9.png');

		this.load.image('star', 'img/star.png');
		this.load.image('arrow', 'img/arrow.png');

		//load json data
		//this.load.text('dataNumbers', '/my/numbers.json');
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
