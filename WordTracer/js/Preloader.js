WordTrack.Preloader = function(game){};

WordTrack.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#f4b942';

		this.load.spritesheet('btnStart','img/button.png', 120, 40);
		this.load.image('pineapple', 'img/pineapple.png');
		this.load.image('btnReady', 'img/readytogo.png');
		this.load.image('no1', 'img/no1.png');
		this.load.image('no2', 'img/no2.png');
		this.load.image('no3', 'img/no3.png');

		this.load.image('wordP', 'img/wordP.png');
		this.load.image('wordI', 'img/wordI.png');
		this.load.image('wordN', 'img/wordN.png');

		this.load.image('iconPineapple', 'img/iconPineapple.png');

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

		//add image line
		this.load.image('line' , 'img/fusia.png');

		this.load.image('done' , 'img/done.png');
		this.load.image('nextword' , 'img/nextword.png');
		this.load.image('tryagain' , 'img/tryagain.png');

		this.load.image('pen' , 'img/pen.png');
		this.load.image('welldone' , 'img/welldone.png');
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
