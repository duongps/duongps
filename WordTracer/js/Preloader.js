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
													"R":[{"name": "imgOne", "x": 360 , "y": 160},\
																{"name": "imgTwo", "x": 360, "y":  230},\
																{"name": "imgThree", "x": 360, "y": 302},\
																{"name": "imgFour", "x": 390, "y":  302},\
																{"name": "imgFive", "x": 455, "y":  302}],\
													"T":[{"name": "imgOne", "x": 360 , "y": 160},\
																{"name": "imgTwo", "x": 360, "y":  230},\
																{"name": "imgThree", "x": 360, "y": 302},\
																{"name": "imgFour", "x": 390, "y":  302},\
																{"name": "imgFive", "x": 455, "y":  302}]\
															}';
};

WordTrack.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#FDBF2D';

		this.load.spritesheet('btnStart','img/button.png', 120, 40);

		this.load.image('pineapple', 'img/pineapple.png');
		this.load.image('carrot', 'img/carrot.png');

		this.load.image('btnReady', 'img/readytogo.png');
		this.load.image('no1', 'img/no1.png');
		this.load.image('no2', 'img/no2.png');
		this.load.image('no3', 'img/no3.png');
		this.load.image('tick', 'img/tick.png');

		this.load.image('P', 'img/P.png');
		this.load.image('I', 'img/I.png');
		this.load.image('N', 'img/N.png');
		this.load.image('A', 'img/A.png');
		this.load.image('E', 'img/E.png');
		this.load.image('L', 'img/L.png');
		this.load.image('C', 'img/C.png');
		this.load.image('R', 'img/R.png');
		this.load.image('O', 'img/O.png');
		this.load.image('T', 'img/T.png');

		this.load.image('iconPineapple', 'img/iconpineapple.png');
		this.load.image('background', 'img/background.png');

		//add image number
		this.load.image('img0', 'img/0.png');
		this.load.image('img1', 'img/1.png');
		this.load.image('img2', 'img/2.png');
		this.load.image('img3', 'img/3.png');
		this.load.image('img4', 'img/4.png');
		this.load.image('img5', 'img/5.png');
		this.load.image('img6', 'img/6.png');
		this.load.image('img7', 'img/7.png');
		this.load.image('img8', 'img/8.png');
		this.load.image('img9', 'img/9.png');
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
