var WordTrack = {};
WordTrack.Boot = function(game){};
WordTrack.Boot.prototype = {
	preload: function(){
			//load json data
			this.load.json('drawingJson', 'assets/json/drawing.json');
			this.load.json('wordJson', 'assets/json/words.json');
	},

	create: function(){
		// set scale options
		// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		// start the Preloader state
		this.state.start('Preloader');
	}
};
