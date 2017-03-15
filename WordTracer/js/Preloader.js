WordTrack.Preloader = function(game){
		//local web can not use json file so that temparory use local data
		this.jsonObjNumber = '[{"word":"A", "image": "A.png",\
															"draw":[{"key":"A1", "image":"dashlineA_1.png","x": 336.5, "y": 236\
																						,"numbers":[{"x": 375,"y": 130},\
																												{"x": 338,"y": 233},\
																												{"x": 300,"y": 342}]},\
																			{"key":"A2", "image":"dashlineA_2.png","x": 411.5, "y": 236\
																						 ,"numbers":[{"x": 375,"y": 130},\
																												{"x": 411, "y": 233},\
																												{"x": 449, "y": 341}]},\
																			{"key":"A3", "image":"dashlineA_3.png","x": 374, "y": 265\
																		 				,"numbers":[{"x": 340, "y": 265},\
																												{"x": 410, "y": 266}]}\
																			]},\
													{"word":"B", "image": "B.png",\
															"draw":[{"key":"B1", "image":"dashlineB_1.png","x": 328, "y": 235\
															 							,"numbers":[{"x": 327, "y": 137},\
																												{"x": 327, "y": 230},\
																												{"x": 327, "y": 334}]},\
																		 {"key":"B2", "image":"dashlineB_2.png","x": 376, "y": 183\
																		  			,"numbers":[{"x": 340, "y": 137},\
																												{"x": 425, "y": 165},\
																												{"x": 340, "y": 230}]},\
																		 {"key":"B3", "image":"dashlineB_3.png","x": 381, "y": 282\
																		  			,"numbers":[{"x": 340, "y": 230},\
																												{"x": 425, "y": 300},\
																												{"x": 340, "y": 334}]}\
																			]},\
													{"word":"C", "image": "C.png",\
															"draw":[{"key":"C1", "image":"dashlineC_1.png","x": 382, "y": 237\
																						,"numbers":[{"x": 443, "y": 142},\
																												{"x": 344, "y": 156},\
																												{"x": 309, "y": 241},\
																												{"x": 344, "y": 316},\
																												{"x": 443, "y": 331}]}\
																			]},\
													{"word":"D", "image": "D.png",\
															"draw":[{"key":"D1", "image":"dashlineD_1.png","x": 309, "y": 238\
																						,"numbers":[{"x": 309, "y": 142},\
																												{"x": 309, "y": 235},\
																												{"x": 309, "y": 333}]},\
																			{"key":"D2", "image":"dashlineD_2.png","x": 381, "y": 237\
																						,"numbers":[{"x": 322 ,"y": 142},\
																												{"x": 409, "y": 151},\
																												{"x": 452, "y": 235},\
																												{"x": 409, "y": 319},\
																												{"x": 322, "y": 333}]}\
																			]},\
														{"word":"E", "image": "E.png",\
																"draw":[{"key":"E1", "image":"dashlineE_1.png","x": 338, "y": 237\
																							,"numbers":[{"x": 338, "y": 139},\
																													{"x": 338, "y": 231},\
																													{"x": 338, "y": 334}]},\
																				{"key":"E2", "image":"dashlineE_2.png","x": 390.5, "y": 139\
																							,"numbers":[{"x": 351 ,"y": 139},\
																													{"x": 428, "y": 139}]},\
																				{"key":"E3", "image":"dashlineE_2.png","x": 390.5, "y": 231\
																							,"numbers":[{"x": 351 ,"y": 231},\
																													{"x": 428, "y": 231}]},\
																				{"key":"E4", "image":"dashlineE_2.png","x": 390.5, "y": 334\
																							,"numbers":[{"x": 351 ,"y": 334},\
																													{"x": 428, "y": 334}]}\
																				]},\
															{"word":"F", "image": "F.png",\
																	"draw":[{"key":"E1", "image":"dashlineE_1.png","x": 338, "y": 237\
																								,"numbers":[{"x": 338, "y": 139},\
																														{"x": 338, "y": 235},\
																														{"x": 338, "y": 334}]},\
																					{"key":"E2", "image":"dashlineE_2.png","x": 390.5, "y": 139\
																								,"numbers":[{"x": 351 ,"y": 139},\
																														{"x": 428, "y": 139}]},\
																					{"key":"E3", "image":"dashlineE_2.png","x": 390.5, "y": 235\
																								,"numbers":[{"x": 351 ,"y": 235},\
																														{"x": 428, "y": 235}]}\
																				]},\
															{"word":"G", "image": "G.png",\
																	"draw":[{"key":"G1", "image":"dashlineG_1.png","x": 371, "y": 237\
																								,"numbers":[{"x": 442, "y": 144},\
																														{"x": 350, "y": 149},\
																														{"x": 302, "y": 233},\
																														{"x": 349, "y": 323},\
																														{"x": 442, "y": 326}]},\
																					{"key":"G2", "image":"dashlineG_2.png","x": 420, "y": 285\
																								,"numbers":[{"x": 396 ,"y": 244},\
																														{"x": 442, "y": 243},\
																														{"x": 442, "y": 313}]}\
																				]},\
															{"word":"H", "image": "H.png",\
																	"draw":[{"key":"H1", "image":"dashlineH_1.png","x": 310, "y": 236\
																								,"numbers":[{"x": 310, "y": 131},\
																														{"x": 310, "y": 231},\
																														{"x": 310, "y": 340}]},\
																					{"key":"H2", "image":"dashlineH_1.png","x": 440, "y": 236\
																								,"numbers":[{"x": 440 ,"y": 131},\
																														{"x": 440, "y": 231},\
																														{"x": 440, "y": 340}]},\
																					{"key":"H3", "image":"dashlineH_3.png","x": 375, "y": 231\
																								,"numbers":[{"x": 323 ,"y": 231},\
																														{"x": 427, "y": 231}]}\
																				]},\
																{"word":"I", "image": "I.png",\
																		"draw":[{"key":"I1", "image":"dashlineI_1.png","x": 375, "y": 236\
																									,"numbers":[{"x": 375, "y": 135},\
																															{"x": 375, "y": 236},\
																															{"x": 375, "y": 337}]}\
																					]},\
																{"word":"J", "image": "J.png",\
																		"draw":[{"key":"J1", "image":"dashlineJ_1.png","x": 370, "y": 240\
																									,"numbers":[{"x": 400, "y": 138},\
																															{"x": 400, "y": 214},\
																															{"x": 400, "y": 298},\
																															{"x": 335, "y": 333}]}\
																					]},\
																{"word":"K", "image": "K.png",\
																		"draw":[{"key":"K1", "image":"dashlineK_1.png","x": 325, "y": 235\
																									,"numbers":[{"x": 325, "y": 135},\
																															{"x": 325, "y": 231},\
																															{"x": 325, "y": 338}]},\
																						{"key":"K2", "image":"dashlineK_2.png","x": 381, "y": 197\
																									,"numbers":[{"x": 435, "y": 135},\
																															{"x": 338, "y": 247}]},\
																						{"key":"K3", "image":"dashlineK_3.png","x": 404, "y": 281\
																									,"numbers":[{"x": 362, "y": 221},\
																															{"x": 444, "y": 338}]}\
																					]},\
																{"word":"L", "image": "L.png",\
																		"draw":[{"key":"L1", "image":"dashlineL_1.png","x": 339, "y": 231\
																									,"numbers":[{"x": 339, "y": 135},\
																															{"x": 339, "y": 228},\
																															{"x": 339, "y": 333}]},\
																						{"key":"L2", "image":"dashlineL_2.png","x": 391, "y": 333\
																									,"numbers":[{"x": 340, "y": 333},\
																															{"x": 435, "y": 333}]}\
																					]},\
																{"word":"M", "image": "M.png",\
																		"draw":[{"key":"M1", "image":"dashlineM_1.png","x": 304, "y": 235\
																									,"numbers":[{"x": 313, "y": 135},\
																															{"x": 304, "y": 235},\
																															{"x": 297, "y": 338}]},\
																							{"key":"M2", "image":"dashlineM_2.png","x": 343, "y": 235\
																									,"numbers":[{"x": 313, "y": 135},\
																															{"x": 342, "y": 235},\
																															{"x": 375, "y": 338}]},\
																							{"key":"M3", "image":"dashlineM_3.png","x": 404, "y": 235\
																									,"numbers":[{"x": 438, "y": 135},\
																															{"x": 404, "y": 235},\
																															{"x": 375, "y": 338}]},\
																							{"key":"M4", "image":"dashlineM_4.png","x": 444, "y": 235\
																									,"numbers":[{"x": 438, "y": 135},\
																															{"x": 444, "y": 235},\
																															{"x": 449, "y": 338}]}\
																					]},\
																{"word":"N", "image": "N.png",\
																		"draw":[{"key":"N1", "image":"dashlineN_1.png","x": 307, "y": 235\
																									,"numbers":[{"x": 308, "y": 135},\
																															{"x": 308, "y": 235},\
																															{"x": 308, "y": 338}]},\
																							{"key":"N2", "image":"dashlineN_2.png","x": 375, "y": 235\
																									,"numbers":[{"x": 308, "y": 135},\
																															{"x": 377, "y": 235},\
																															{"x": 441, "y": 338}]},\
																							{"key":"N3", "image":"dashlineN_3.png","x": 441, "y": 235\
																									,"numbers":[{"x": 441, "y": 135},\
																															{"x": 441, "y": 235},\
																															{"x": 441, "y": 338}]}\
																					]},\
																{"word":"O", "image": "O.png",\
																		"draw":[{"key":"O1", "image":"dashlineO_1.png","x": 335, "y": 238\
																									,"numbers":[{"x": 375, "y": 135},\
																															{"x": 307, "y": 182},\
																															{"x": 302, "y": 280},\
																															{"x": 375, "y": 338}]},\
																						{"key":"O2", "image":"dashlineO_2.png","x": 416, "y": 238\
																									,"numbers":[{"x": 375, "y": 338},\
																															{"x": 448, "y": 280},\
																															{"x": 448, "y": 182},\
																															{"x": 375, "y": 135}]}\
																					]},\
																{"word":"P", "image": "P.png",\
																		"draw":[{"key":"P1", "image":"dashlineP_1.png","x": 330, "y": 240\
																									,"numbers":[{"x": 330, "y": 138},\
																															{"x": 330, "y": 231},\
																															{"x": 330, "y": 338}]},\
																							{"key":"P3", "image":"dashlineP_2.png","x": 382, "y": 193\
																									,"numbers":[{"x": 330, "y": 138},\
																															{"x": 432, "y": 187},\
																															{"x": 340, "y": 250}]}\
																					]},\
																{"word":"Q", "image": "Q.png",\
																		"draw":[{"key":"Q1", "image":"dashlineO_1.png","x": 335, "y": 238\
																									,"numbers":[{"x": 375, "y": 135},\
																															{"x": 307, "y": 182},\
																															{"x": 302, "y": 280},\
																															{"x": 375, "y": 338}]},\
																						{"key":"Q2", "image":"dashlineO_2.png","x": 416, "y": 238\
																									,"numbers":[{"x": 375, "y": 338},\
																															{"x": 448, "y": 280},\
																															{"x": 448, "y": 182},\
																															{"x": 375, "y": 135}]},\
																						{"key":"Q3", "image":"dashlineQ_1.png","x": 416, "y": 238\
																									,"numbers":[{"x": 400, "y": 335},\
																															{"x": 460, "y": 363}]}\
																					]},\
																{"word":"R", "image": "R.png",\
																		"draw":[{"key":"R1", "image":"dashlineR_1.png","x": 328, "y": 238\
																									,"numbers":[{"x": 328, "y": 138},\
																															{"x": 328, "y": 236},\
																															{"x": 328, "y": 338}]},\
																						{"key":"R2", "image":"dashlineR_2.png","x": 380, "y": 188\
																									,"numbers":[{"x": 328, "y": 138},\
																															{"x": 426, "y": 178},\
																															{"x": 395, "y": 236},\
																															{"x": 340, "y": 237}]},\
																						{"key":"R3", "image":"dashlineR_3.png","x": 417, "y": 289\
																									,"numbers":[{"x": 395, "y": 236},\
																															{"x": 425, "y": 285},\
																															{"x": 436, "y": 338}]}\
																					]},\
																{"word":"S", "image": "S.png",\
																		"draw":[{"key":"S1", "image":"dashlineS_1.png","x": 370, "y": 236\
																									,"numbers":[{"x": 417, "y": 141},\
																															{"x": 327, "y": 180},\
																															{"x": 387, "y": 237},\
																															{"x": 412, "y": 318},\
																															{"x": 323, "y": 327}]}\
																					]},\
																{"word":"T", "image": "T.png",\
																		"draw":[{"key":"T1", "image":"dashlineT_1.png","x": 375, "y": 141\
																									,"numbers":[{"x": 307, "y": 141},\
																															{"x": 375, "y": 141},\
																															{"x": 442, "y": 141}]},\
																						{"key":"T2", "image":"dashlineT_2.png","x": 375, "y": 243\
																									,"numbers":[{"x": 375, "y": 141},\
																															{"x": 375, "y": 235},\
																															{"x": 375, "y": 338}]}\
																					]},\
																{"word":"U", "image": "U.png",\
																		"draw":[{"key":"U1", "image":"dashlineU_1.png","x": 375, "y": 240\
																									,"numbers":[{"x": 313, "y": 138},\
																															{"x": 311, "y": 250},\
																															{"x": 373, "y": 338},\
																															{"x": 439, "y": 250},\
																															{"x": 439, "y": 138}]}\
																					]},\
																{"word":"V", "image": "V.png",\
																		"draw":[{"key":"V1", "image":"dashlineV_1.png","x": 338, "y": 235\
																									,"numbers":[{"x": 307, "y": 138},\
																															{"x": 340, "y": 240},\
																															{"x": 374, "y": 338}]},\
																						{"key":"V2", "image":"dashlineV_2.png","x": 412, "y": 235\
																									,"numbers":[{"x": 443, "y": 138},\
																															{"x": 410, "y": 240},\
																															{"x": 374, "y": 338}]}\
																					]},\
																{"word":"W", "image": "W.png",\
																		"draw":[{"key":"W1", "image":"dashlineW_1.png","x": 312, "y": 235\
																									,"numbers":[{"x": 295, "y": 135},\
																															{"x": 312, "y": 235},\
																															{"x": 330, "y": 335}]},\
																						{"key":"W2", "image":"dashlineW_2.png","x": 353, "y": 235\
																									,"numbers":[{"x": 375, "y": 135},\
																															{"x": 352, "y": 235},\
																															{"x": 330, "y": 335}]},\
																						{"key":"W3", "image":"dashlineW_1.png","x": 394, "y": 235\
																									,"numbers":[{"x": 375, "y": 135},\
																															{"x": 394, "y": 235},\
																															{"x": 415, "y": 335}]},\
																						{"key":"W4", "image":"dashlineW_2.png","x": 436, "y": 235\
																									,"numbers":[{"x": 455, "y": 135},\
																															{"x": 436, "y": 235},\
																															{"x": 415, "y": 335}]}\
																					]},\
																{"word":"X", "image": "X.png",\
																		"draw":[{"key":"X1", "image":"dashlineX_1.png","x": 375, "y": 235\
																									,"numbers":[{"x": 321, "y": 138},\
																															{"x": 376, "y": 236},\
																															{"x": 433, "y": 335}]},\
																						{"key":"X2", "image":"dashlineX_2.png","x": 375, "y": 235\
																									,"numbers":[{"x": 435, "y": 138},\
																															{"x": 376, "y": 236},\
																															{"x": 316, "y": 335}]}\
																					]},\
																{"word":"Y", "image": "Y.png",\
																		"draw":[{"key":"Y1", "image":"dashlineY_1.png","x": 343, "y": 189\
																									,"numbers":[{"x": 317, "y": 138},\
																															{"x": 375, "y": 250}]},\
																						{"key":"Y2", "image":"dashlineY_2.png","x": 411, "y": 189\
																									,"numbers":[{"x": 439, "y": 138},\
																															{"x": 375, "y": 250}]},\
																						{"key":"Y3", "image":"dashlineY_3.png","x": 375, "y": 302\
																									,"numbers":[{"x": 375, "y": 250},\
																															{"x": 375, "y": 338}]}\
																					]},\
																{"word":"Z", "image": "Z.png",\
																		"draw":[{"key":"Z1", "image":"dashlineZ_1.png","x": 370, "y": 138\
																									,"numbers":[{"x": 316, "y": 138},\
																															{"x": 432, "y": 138}]},\
																						{"key":"Z2", "image":"dashlineZ_2.png","x": 374, "y": 237\
																									,"numbers":[{"x": 432, "y": 138},\
																															{"x": 374, "y": 235},\
																															{"x": 314, "y": 334}]},\
																						{"key":"Z3", "image":"dashlineZ_3.png","x": 381, "y": 334\
																									,"numbers":[{"x": 314, "y": 334},\
																															{"x": 443, "y": 334}]}\
																					]}\
												]';

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
				console.log("jsonWord.word[i].text: " + jsonWord.word[i].text);
				this.load.image(jsonWord.word[i].text, 'img/word/' + jsonWord.word[i].image);
		}

		var jsonObjNum = this.jsonObjNumber;
		jsonNum = JSON.parse(jsonObjNum);
		//add image alphabet
		for(var i = 0 ; i < jsonNum.length ; i++) {
				console.log('jsonNum[i].word :' + jsonNum[i].word);
				console.log('jsonWord[i].image :' + jsonNum[i].image);
				this.load.image(jsonNum[i].word, 'img/alphabet/' + jsonNum[i].image);
				for(var j = 0 ; j < jsonNum[i].draw.length ; j++) {
						console.log('jsonNum[i].draw[j].key :' + jsonNum[i].draw[j].key);
						console.log('jsonNum[i].draw[j].image :' + jsonNum[i].draw[j].image);
						//mapping dashline image with key json
						this.load.image(jsonNum[i].draw[j].key, 'img/alphabet/' + jsonNum[i].draw[j].image);
				}
		}

		//add image number
		this.load.image('1', 'img/number/1.png');
		this.load.image('2', 'img/number/2.png');
		this.load.image('3', 'img/number/3.png');
		this.load.image('4', 'img/number/4.png');
		this.load.image('5', 'img/number/5.png');

		this.load.image('penlightpink', 'img/penlightpink.png');
		this.load.image('penorange', 'img/penorange.png');
		this.load.image('penblue', 'img/penblue.png');
		this.load.image('pengreen', 'img/pengreen.png');
		this.load.image('penpink', 'img/penpink.png');
		this.load.image('penred', 'img/penred.png');
		this.load.image('penviolet', 'img/penviolet.png');

		this.load.image('btnnext', 'img/btnnext.png');
		this.load.image('btnreload', 'img/btnreload.png');

		//load json data
		//this.load.text('dataNumbers', '/my/numbers.json');
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
