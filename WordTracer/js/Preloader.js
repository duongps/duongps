WordTrack.Preloader = function(game){};

WordTrack.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#2FC8DD';
		
		var jsonWord = this.cache.getJSON('wordJson');
		//add image word
		for(var i = 0 ; i < jsonWord.word.length ; i++) {
				this.load.image(jsonWord.word[i].text, 'assets/img/word/' + jsonWord.word[i].image);
		}

		var jsonNum = this.cache.getJSON('drawingJson');
		//add image alphabet
		for(var i = 0 ; i < jsonNum.length ; i++) {
				this.load.image(jsonNum[i].word, 'assets/img/alphabet/' + jsonNum[i].image);
				for(var j = 0 ; j < jsonNum[i].draw.length ; j++) {
						//mapping dashline image with key json
						this.load.image(jsonNum[i].draw[j].key, 'assets/img/alphabet/' + jsonNum[i].draw[j].image);
				}
		}
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
