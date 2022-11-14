/*
TODO:
Fill in remaining IRs (if they exist, and i might make some up if they don't)
Soils
More sedimentary rocks
Metamorphic rocks
	Ersatz pressure
Merge crimson?
Proper classification of limestone within these code comments
*/

//Functions

	//Generalized sedimentation function

		function sedimentation(pixel,sedimentNeighborTable,finalRock,chance=0.0003) {
			if(Math.random() < chance) {
				var validNeighborArray = Array.apply(null, Array(adjacentCoords.length)).map(function() {return false});
				//sedimentSandstoneTries++;
				for(i = 0; i < adjacentCoords.length; i++) {
					//sedimentSandstoneTryIterations++;
					if(isEmpty(pixel.x+adjacentCoords[i][0],pixel.y+adjacentCoords[i][1],true)) {
						validNeighborArray[i] = false;
						//sedimentSandstoneNoDetects++;
					} else if(!isEmpty(pixel.x+adjacentCoords[i][0],pixel.y+adjacentCoords[i][1],true)) {
						/*if(sedimentNeighborTable.includes(pixelMap[pixel.x+adjacentCoords[i][0]][pixel.y+adjacentCoords[i][1]].element)) {
							validNeighborArray[i] = true;
							//sedimentSandstoneDetects++;
						} else {
							validNeighborArray[i] = false;
							//sedimentSandstoneNoDetects++;
						};*/
						validNeighborArray[i] = sedimentNeighborTable.includes(pixelMap[pixel.x+adjacentCoords[i][0]][pixel.y+adjacentCoords[i][1]].element);
					};
				};
				if(validNeighborArray.includes(true)) {
					//sandstoneFormations++;
					changePixel(pixel,finalRock);
				}/* else {
					sandstoneFailures++;
				}*/;
			};
		};

	//Function for mass replacement according to an object

		function transformAround(pixel,range,substitutionObject,reverse=false) {
			var radius1 = (-1 * range);
			var radius2 = (range + 1);
			for (let i = radius1; i < radius2; i++) {
				for (let j = radius1; j < radius2; j++) {
					if(reverse) {
						if (!isEmpty(pixel.x+j,pixel.y+i) && !outOfBounds(pixel.x+j,pixel.y+i)) {
							var destPixel = pixelMap[pixel.x+j][pixel.y+i];
							var elementToCheck = destPixel.element;
							if(getKeyByValue(irradiatedObject,elementToCheck)) {
								changePixel(destPixel,getKeyByValue(irradiatedObject,elementToCheck));
							};
						};
					} else {
						if (!isEmpty(pixel.x+j,pixel.y+i) && !outOfBounds(pixel.x+j,pixel.y+i)) {
							var destPixel = pixelMap[pixel.x+j][pixel.y+i];
							var elementToCheck = destPixel.element;
							if(substitutionObject[elementToCheck]) {
								changePixel(destPixel,substitutionObject[elementToCheck]);
							};
						};
					};
				};
			};
		};

	//Previous function with adjacentPixels

		function transformAdjacent(pixel,substitutionObject,reverse=false) {
			for(k = 0; k < adjacentCoords.length; k++) {
				var i = adjacentCoords[k][0]
				var j = adjacentCoords[k][1]
				if(reverse) {
					if (!isEmpty(pixel.x+j,pixel.y+i) && !outOfBounds(pixel.x+j,pixel.y+i)) {
						var destPixel = pixelMap[pixel.x+j][pixel.y+i];
						var elementToCheck = destPixel.element;
						if(getKeyByValue(irradiatedObject,elementToCheck)) {
							changePixel(destPixel,getKeyByValue(irradiatedObject,elementToCheck));
						};
					};
				} else {
					if (!isEmpty(pixel.x+j,pixel.y+i) && !outOfBounds(pixel.x+j,pixel.y+i)) {
						var destPixel = pixelMap[pixel.x+j][pixel.y+i];
						var elementToCheck = destPixel.element;
						if(substitutionObject[elementToCheck]) {
							changePixel(destPixel,substitutionObject[elementToCheck]);
						};
					};
				};
			};
		};
		
//Terrain

	//Soils
	
		//Dry
		//Warning: Crippling lack of online information on the properties of the various soils by texture
		
			//Clay
			
				//Clay exists
			
			//Silty clay
				
				//TODO
				
			//Silty Clay Loam
				
				//TODO
				
			//Silty Loam
				
				//TODO
				
			//Silt
			
				//TODO
				
			//Clay Loam
			
				//TODO
				//elements.clay_soil.name = "Clay Loam"
				
			//Medium Loam
				
				//TODO
				//elements.dirt.name = "Medium Loam";
				
			//Sandy Clay
			
				/*elements.sandy_clay = {
					color: "#DDCD8A",
					behavior: behaviors.POWDER,
					tempHigh: 1710,
					tempLow: -50,
					stateLow: "sandy_clay_permafrost",
					category:"land",
					state: "solid",
					density: 1220,
				};*/
				
			//Sandy Clay Loam
			
				//TODO
				
			//Sandy Loam
			
				//TODO
				
			//Loamy Sand
			
				//TODO
				
			//Sand
			
				//Sand exists
				
		//Wet
		
			//Wet Clay
			
				//TODO
			
			//Wet Silty clay
				
				//TODO
				
			//Wet Silty Clay Loam
				
				//TODO
				
			//Wet Silty Loam
				
				//TODO
				
			//Wet Silt
			
				//TODO
				
			//Wet Clay Loam
			
				//TODO
				
			//Wet Medium Loam
				
				//Mud exists
				
			//Wet Sandy Clay
			
				//TODO
				
			//Wet Sandy Clay Loam
			
				//TODO
				
			//Wet Sandy Loam
			
				//TODO
				
			//Wet Loamy Sand
			
				//TODO
				
			//Wet Sand
			
				//Wet Sand exists
				
		//Permafrost

			//Clay Permafrost
			
				//TODO
			
			//Silty clay Permafrost
				
				//TODO
				
			//Silty Clay Loam Permafrost
				
				//TODO
				
			//Silty Loam Permafrost
				
				//TODO
				
			//Silt Permafrost
			
				//TODO
				
			//Clay Loam Permafrost
			
				//TODO
				
			//Medium Loam Permafrost
				
				//Permafrost exists
				
			//Sandy Clay Permafrost
			
				//TODO
				
			//Sandy Clay Loam Permafrost
			
				//TODO
				
			//Sandy Loam Permafrost
			
				//TODO
				
			//Loamy Sand Permafrost
			
				//TODO
				
			//Sand Permafrost
			
				//TODO

		//Irradiated (unmoved/TODO)
	
			//Dry
			
				//Irradiated Clay
				
					//Clay exists
				
				//Irradiated Silty clay
					
					//TODO
					
				//Irradiated Silty Clay Loam
					
					//TODO
					
				//Irradiated Silty Loam
					
					//TODO
					
				//Irradiated Silt
				
					//TODO
					
				//Irradiated Clay Loam
				
					//Clay Soil exists
					
				//Irradiated Medium Loam
					
					//Dirt exists
					
				//Irradiated Sandy Clay
				
					//TODO
					
				//Irradiated Sandy Clay Loam
				
					//TODO
					
				//Irradiated Sandy Loam
				
					//TODO
					
				//Irradiated Loamy Sand
				
					//TODO
					
				//Irradiated Sand
				
					//Sand exists
					
			//Wet
			
				//Irradiated Wet Clay
				
					//TODO
				
				//Irradiated Wet Silty clay
					
					//TODO
					
				//Irradiated Wet Silty Clay Loam
					
					//TODO
					
				//Irradiated Wet Silty Loam
					
					//TODO
					
				//Irradiated Wet Silt
				
					//TODO
					
				//Irradiated Wet Clay Loam
				
					//TODO
					
				//Irradiated Wet Medium Loam
					
					//Mud exists
					
				//Irradiated Wet Sandy Clay
				
					//TODO
					
				//Irradiated Wet Sandy Clay Loam
				
					//TODO
					
				//Irradiated Wet Sandy Loam
				
					//TODO
					
				//Irradiated Wet Loamy Sand
				
					//TODO
					
				//Irradiated Wet Sand
				
					//Wet Sand exists

			//Permafrost
					
				//Irradiated Clay Permafrost
				
					//TODO
				
				//Irradiated Silty clay Permafrost
					
					//TODO
					
				//Irradiated Silty Clay Loam Permafrost
					
					//TODO
					
				//Irradiated Silty Loam Permafrost
					
					//TODO
					
				//Irradiated Silt Permafrost
				
					//TODO
					
				//Irradiated Clay Loam Permafrost
				
					//TODO
					
				//Irradiated Medium Loam Permafrost
					
					//Permafrost exists
					
				//Irradiated Sandy Clay Permafrost
				
					//TODO
					
				//Irradiated Sandy Clay Loam Permafrost
				
					//TODO
					
				//Irradiated Sandy Loam Permafrost
				
					//TODO
					
				//Irradiated Loamy Sand Permafrost
				
					//TODO
					
				//Irradiated Sand Permafrost
				
					//TODO

	//Rocks
	
		//Igneous

			//Phaneritic

				//Felsic: granite

					elements.granite = {
						color: ["#F3C3AD", "#F0AB75", "#DDA888", "#BD927E", "#998473", "#5C5E53", "#BD8366"],
						behavior: behaviors.WALL,
						category: "land",
						tempHigh: 1215,
						stateHigh: "felsic_magma",
						density: 2691,
						hardness: 0.75,
						breakInto: "granite_gravel",
					};

					elements.granite_gravel = {
						color: ["#E3B39D", "#E09B65", "#CD9878", "#AD826E", "#897463", "#4C4E43", "#AD7356", "#F3C3AD", "#F0AB75", "#DDA888", "#BD927E", "#998473", "#5C5E53", "#BD8366", "#FFD3BD", "#FFBB85", "#EDB898", "#CDA28E", "#A99483", "#6C6E63", "#CD9376"],
						behavior: behaviors.POWDER,
						category: "land",
						tempHigh: 1215,
						stateHigh: "felsic_magma",
						density: 1320,
					};

					elements.felsic_magma = {
					  "reactions": {
						"magma": { "elem1": "intermediate_magma", "elem2": "intermediate_magma" },
						"ash": { "elem1": null, "elem2": "molten_slag" },
						"dust": { "elem1": null, "elem2": "molten_slag" },
					  },
					  "name": "felsic magma",
					  "color": ["#FFF457", "#FF9257", "#FF9200", "#FFD63B", "#FFAB3B", "#FF8000", "#FFD244", "#FFA844", "#FF7E00", "#FFB73F", "#FF923F", "#FF6E00", "#FFA53A", "#FF843A", "#FF6300", "#B8762A", "#B85E2A", "#B84700", "#FFA433", "#FF8333", "#FF6200"],
					  "behavior": behaviors.MOLTEN,
					  "temp": 1215,
					  "tempLow": 800,
					  "stateLow": ["rhyolite","rhyolite","rhyolite","granite"],
					  "viscosity": 100000000,
					  "hidden": true,
					  "state": "liquid",
					  "category": "molten",
					  "density": 2421.9
					};

				//Intermediate felsic: granodiorite (such a creative name)

					elements.granodiorite = {
						color: ["#B1AB9D", "#262001", "#A6A292", "#D6C5BC", "#F2F2F2", "#DED8C2", "#978871", "#A8AAA7"], //From image: By Rudolf Pohl - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=7788350
						behavior: behaviors.WALL,
						category: "land",
						tempHigh: 1050, //poorly searchable term, little findable information, idk if accurate
						stateHigh: "intermediate_felsic_magma",
						density: 2644, //last 2 digits made up again
						hardness: 0.75,
						breakInto: "granodiorite_gravel",
					};

					elements.granodiorite_gravel = {
						color: ["#A19B8D", "#161000", "#969282", "#C6B5AC", "#E2E2E2", "#CEC8B2", "#877861", "#989A97", "#B1AB9D", "#262001", "#A6A292", "#D6C5BC", "#F2F2F2", "#DED8C2", "#978871", "#A8AAA7", "#C1BBAD", "#363011", "#B6B2A2", "#E6D5CC", "#FFFFFF", "#EEE8D2", "#A79881", "#B8BAB7"], //placeholder
						behavior: behaviors.POWDER,
						category: "land",
						tempHigh: 1050,
						stateHigh: "intermediate_felsic_magma",
						density: 1296,
					};

					elements.intermediate_felsic_magma = {
					  "reactions": {
						"magma": { "elem1": "intermediate_magma", "elem2": "intermediate_magma" },
						"ash": { "elem1": null, "elem2": "molten_slag" },
						"dust": { "elem1": null, "elem2": "molten_slag" },
					  },
					  "name": "intermediate felsic magma",
					  "color": ["#FFD64F", "#FFAB4F", "#FF8000", "#7C5831", "#7C5031", "#7C5830", "#FFCB49", "#FFA249", "#FF7A00", "#FFF65E", "#FFC55E", "#FF9400", "#FFFF79", "#FFF279", "#FFB600", "#FFFF61", "#FFD861", "#FFA200", "#FFAA39", "#FF8839", "#FF6600", "#FFD554", "#FFAA54", "#FF8000"],
					  "behavior": behaviors.MOLTEN,
					  "temp": 1200,
					  "tempLow": 1050,
					  "stateLow": ["dacite","dacite","dacite","granodiorite"],
					  "viscosity": 18700000, //10^average of logarithms
					  "hidden": true,
					  "state": "liquid",
					  "category": "molten",
					  "density": 2320, //averaged lower values
					};

				//Intermediate: diorite

					elements.diorite = {
						color: ["#E1E1E1","#B0A696","#707271","#434459","#242424"], //Extracted from image and blended
						//By Michael C. Rygel - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=31124755
						behavior: behaviors.WALL,
						category: "land",
						tempHigh: 1300,
						stateHigh: "intermediate_magma",
						density: 2822, //last 2 digits made up.
						hardness: 0.70, //bs'd from MH rel to granite
						breakInto: "diorite_gravel",
					};

					elements.diorite_gravel = {
						color: ["#F1F1F1","#E1E1E1","#D1D1D1","#C0B6A6","#B0A696","#A09686","#808281","#707271","#606261","#535469","#434459","#333449","#343434","#242424","#141414"],
						behavior: behaviors.POWDER,
						category: "land",
						tempHigh: 1260,
						stateHigh: "intermediate_magma",
						density: 1717, //approximated from granite values
					};

					elements.intermediate_magma = {
						"reactions": {
							"ash": { "elem1": null, "elem2": "molten_slag" },
							"dust": { "elem1": null, "elem2": "molten_slag" },
						},
						"name": "intermediate magma",
						"color": ["#FFFF70", "#FFE170", "#FFA800", "#FFCF4B", "#FFA64B", "#FF7C00", "#E08E38", "#E07238", "#E05500", "#86552C", "#86442C", "#863300", "#482D12", "#482412", "#481B00"],
						"behavior": behaviors.MOLTEN,
						"temp": 1215,
						"tempLow": 1115,
						"stateLow": ["andesite", "andesite", "andesite", "diorite"],
						"viscosity": 350000,
						"hidden": true,
						"state": "liquid",
						"category": "molten",
						"density": 2450,
					}

				//Mafic: gabbro

					elements.magma.name = "mafic magma" //because it cools into basalt
					//the vanilla viscosity checks out
					elements.rock.name = "gabbro" //based on it melting into mostly basalt, I am assuming that this is mafic magma cooling quickly, and thus assuming that the remainder is magma cooling more slowly into a phaneritic rock, and that woudld be gabbro
					elements.magma.density = 2650

				//Ultramafic: peridotite

					elements.peridotite = {
						color: ["#908557","#A29E78","#7F8044","#C6BC87","#8C8656","#7C7C40","#837840","#8B8B69"],
						behavior: behaviors.WALL,
						category: "land",
						tempHigh: 1400,
						stateHigh: "ultramafic_magma",
						density: 3347, //appr from https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/GL003i009p00509#:~:text=Abstract,and%20the%20bulk%20rock%20analyses.
						hardness: 0.76,
						breakInto: "peridotite_gravel",
					};

					elements.peridotite_gravel = {
						color: ["#807547","#928e68","#6f7034","#b6ac77","#7c7646","#6c6c30","#736830","#7b7b59","#908557","#a29e78","#7f8044","#c6bc87","#8c8656","#7c7c40","#837840","#8b8b69","#a09567","#b2ae88","#8f9054","#d6cc97","#9c9666","#8c8c50","#938850","#9b9b79"],
						behavior: behaviors.POWDER,
						category: "land",
						tempHigh: 1400,
						stateHigh: "ultramafic_magma",
						density: 1681,
					};

					elements.ultramafic_magma = {
					  "reactions": {
						"ash": { "elem1": null, "elem2": "molten_slag" },
						"dust": { "elem1": null, "elem2": "molten_slag" },
					  },
					  "name": "ultramafic magma",
					  "color": ["#ffa62b","#ff852b","#ff6300","#ffc53c","#ff9e3c","#ff7600","#fea022","#fe8022","#fe6000","#ffeb43","#ffbc43","#ff8d00","#ffa72b","#ff862b","#ff6400","#f89b20","#f87c20","#f85d00","#ff9620","#ff7820","#ff5a00","#ffad34","#ff8b34","#ff6800"],
					  "behavior": behaviors.MOLTEN,
					  "temp": 1500,
					  "tempLow": 1390,
					  "stateLow": ["peridotite","komatiite","komatiite","komatiite"],
					  "viscosity": 100,
					  "hidden": true,
					  "state": "liquid",
					  "category": "molten",
					  "density": 2800
					};

			//Aphanitic

				//Felsic: rhyolite

					elements.rhyolite = {
						color: ["#A67153","#BF967E","#D9B5A0","#8C533E","#C99F86","#C5997E","#BB8A69"],
						// also from one of Michael C. Rygel's images
						behavior: behaviors.WALL,
						category: "land",
						tempHigh: 800,
						stateHigh: "felsic_magma",
						density: 2555, //very wide range
						hardness: 0.75,
						breakInto: "rhyolite_gravel",
					};

					elements.rhyolite_gravel = {
						color: ["#B68163","#A67153","#966143","#CFA68E","#BF967E","#AF866E","#E9C5B0","#D9B5A0","#C9A590","#9C634E","#8C533E","#7C432E","#D9AF96","#C99F86","#B98F76","#D5A98E","#C5997E","#B5896E","#CB9A79","#BB8A69","#DB7A59"],
						behavior: behaviors.POWDER,
						category: "land",
						tempHigh: 800,
						stateHigh: "felsic_magma",
						density: 1254, //approximated from granite values
					};

				//Intermediate felsic: dacite

					elements.dacite = {
						color: ["#D9CCC5", "#F2E9E4", "#877670", "#A69B97"],
						behavior: behaviors.WALL,
						category: "land",
						tempHigh: 1050,
						stateHigh: "intermediate_felsic_magma",
						density: 2654, //https://books.google.ca/books?id=ObUPAAAAIAAJ&pg=PA181&lpg=PA181&dq=dacite+specific+gravity&source=bl&ots=qn8B4sirWi&sig=Wp_MHqPuUGPNQobcuNP5c5wqkpU&hl=en&sa=X&ei=cimtUaH8Eab7yAH8joDABQ#v=onepage&q=dacite%20specific%20gravity&f=false
						hardness: 0.75,
						breakInto: "dacite_gravel",
					};

					elements.dacite_gravel = {
						color: ["#C9BCB5", "#E2D9D4", "#776660", "#968B87", "#D9CCC5", "#F2E9E4", "#877670", "#A69B97", "#E9DCD5", "#FFF9F4", "#978680", "#B6ABA7"], //placeholder
						behavior: behaviors.POWDER,
						category: "land",
						tempHigh: 1050,
						stateHigh: "intermediate_felsic_magma",
						density: 1300,
					};

				//Intermediate: andesite

					elements.andesite = {
						color: ["#6F7575", "#C5C9CB", "#818787", "#797F7F", "#B5B9BA", "#6D7371", "#909696"],
						behavior: behaviors.WALL,
						category: "land",
						tempHigh: 1215,
						stateHigh: "intermediate_magma",
						density: 2474, //it varies very widely, so I made the last 2 digits up.
						hardness: 0.75,
						breakInto: "andesite_gravel",
					};

					elements.andesite_gravel = {
						color: ['#5f6565', '#b5b9bb', '#717777', '#696f6f', '#a5a9aa', '#5d6361', '#808686', '#6f7575', '#c5c9cb', '#818787', '#797f7f', '#b5b9ba', '#6d7371', '#909696', '#7f8585', '#d5d9db', '#919797', '#898f8f', '#c5c9ca', '#7d8381', '#a0a6a6'],
						behavior: behaviors.POWDER,
						category: "land",
						tempHigh: 1260,
						stateHigh: "intermediate_magma",
						density: 1214, //approximated from granite values
					};

				//Mafic: basalt

					//No changes from vanilla

				//Ultramafic: komatiite

					elements.komatiite = {
						color: ["#AEB5AE","#A9B8B5","#7B8881","#858B87","#949F97","#505B55"],
						behavior: behaviors.WALL,
						category: "land",
						tempHigh: 1600,
						stateHigh: "ultramafic_magma",
						density: 3100, //approximate density extrapolated from intermediate and mafic density
						//the magma's density is more well-known but there's nothing on the solid rock (probably because it's so rare and often metamorphosed)
						hardness: 0.75,
						breakInto: "komatiite_gravel",
					};

					elements.komatiite_gravel = {
						color: ["#9ea59e","#99a8a5","#6b7871","#757b77","#848f87","#404b45","#aeb5ae","#a9b8b5","#7b8881","#858b87","#949f97","#505b55","#bec5be","#b9c8c5","#8b9891","#959b97","#a4afa7","#606b65"],
						behavior: behaviors.POWDER,
						category: "land",
						tempHigh: 1600,
						stateHigh: "ultramafic_magma",
						density: 1650, //approximated from granite values
					};

			//Vesicular

				//Felsic: pumice

					//Pumice goes here

				//Intermediate felsic: ???

					//???

				//Intermediate: scoria

					//Scoria

				//Mafic: still scoria

					//Also scoria
					//Perhaps a "mafic_scoria"-"intermediate scoria" split if the literature allows

				//Ultramafic: ???

					//???

			//Glassy

				//Felsic: obsidian

					//Obsidian

				//Intermediate felsic: ???

					//???

				//Intermediate: ???

					//???

				//Mafic: ???

					//???

				//Ultramafic: ???

					//???

		//Sedimentary

			//Chemical
			
			//Clastic
				
				//Grains < 1/16 mm
			
				//Grains 1/16-2 mm
				//Partly intermingled with the radiation cult
				
					//Dummied-out debug counters

						/*sedimentSandstoneTries = 0;
						sedimentSandstoneTryIterations = 0;
						sedimentSandstoneDetects = 0;
						sedimentSandstoneNoDetects = 0;
						sandstoneFormations = 0;
						sandstoneFailures = 0;*/
				
					//Elements from which simplified lithification can spread

						sandstoneLithificationElements = ["sand_sediment", "sandstone", "irradiated_sand_sediment", "irradiated_sandstone"/*, "crimson_sandstone", "crimson_sand_sediment"*/]

					//Water reaction to pick up the fine material (this is very simplified)

						elements.water.reactions.wet_sand = {
							"elem1": "sandy_water",
							"elem2": ["wet_sand","wet_sand","wet_sand","sandy_water"],
							chance: 0.01
						};

						elements.water.reactions.irradiated_wet_sand = {
							"elem1": "irradiated_sandy_water",
							"elem2": ["irradiated_wet_sand","irradiated_wet_sand","irradiated_wet_sand","irradiated_wet_sand","irradiated_wet_sand",null],
							chance: 0.01
						};

						/*elements.water.reactions.crimson_wet_sand = { /
							"elem1": "crimson_sandy_water",
							"elem2": ["crimson_wet_sand","crimson_wet_sand","crimson_wet_sand","crimson_wet_sand","crimson_wet_sand",null],
							chance: 0.01
						};*/

					//Sediment suspension

						elements.sandy_water = {
							color: ["#768485", "#849294"],
							behavior: behaviors.LIQUID,
							tempHigh: 100,
							stateHigh: ["steam","steam","sand"],
							//tempLow: 0,
							//stateLow: "sandy_ice",
							category: "liquids",
							heatCapacity: 4.184, //unimplemented
							reactions: {
								"dirt": { // React with (water reacts with dirt to make mud)
									"elem1": [null,null,"wet_sand"], // First element transforms into; in this case, water deletes itself
									"elem2": "mud", // Second element transforms into; in this case, dirt turns to mud
								},
								"water": { "elem1":"water", "elem2":"sandy_water", "chance":0.025 }, //swap reaction
								"sand": { "elem1": [null,null,"wet_sand"], "elem2": "wet_sand", }, 
								"sandy_water": { "elem1":"water", "elem2":"sand_sediment", "chance": 0.001 }, 
								"wet_sand": { "elem1": "water", "elem2":"sand_sediment", "chance": 0.0005 },
								//"salt": { "elem1": "salt_water", "elem2": null },
								//"sugar": { "elem1": "sugar_water", "elem2": null, },
								"dust": { "elem1": "dirty_water", "elem2": null, },
								"ash": { "elem1": "dirty_water", "elem2": null, },
								"cyanide": { "elem1": "dirty_water", "elem2": null, },
								//"carbon_dioxide": { "elem1": "seltzer", "elem2": null, "oneway":true },
								"sulfur": { "elem1": "dirty_water", "elem2": null, },
								"rat": { "elem1": "dirty_water", chance:0.005 },
								"plague": { "elem1": "dirty_water", "elem2": null, },
								"rust": { "elem1": "dirty_water", chance:0.005 },
								"fallout": { "elem1": "dirty_water", chance:0.25 },
								"radiation": { "elem1": "dirty_water", chance:0.25 },
								"uranium": { "elem1": "dirty_water", chance:0.25 },
								"rotten_meat": { "elem1": "dirty_water", chance:0.25 },
								"quicklime": { "elem1": [null,null,"wet_sand"], "elem2": "slaked_lime", },
								"rock": { "elem2": "wet_sand", "chance": 0.00035 },
								"ruins": { "elem2": "rock", "chance": 0.00035 },
								"mudstone": { "elem2": "mud", "chance": 0.00035 },
								//"methane": { "elem1":"primordial_soup", "elem2":"primordial_soup", tempMin:60, charged:true },
								//"ammonia": { "elem1":"primordial_soup", "elem2":"primordial_soup", tempMin:60, charged:true },
								"fly": { "elem2":"dead_bug", "chance":0.1, "oneway":true },
								"firefly": { "elem2":"dead_bug", "chance":0.1, "oneway":true },
								"bee": { "elem2":"dead_bug", "chance":0.05, "oneway":true },
								"stink_bug": { "elem2":"dead_bug", "chance":0.1, "oneway":true },
							},
							state: "liquid",
							density: 1097,
							conduct: 0.02,
							stain: 0.01,
						}

					//Sediment element where lithification code resides

						elements.sand_sediment = {
							hidden: true,
							color: "#d3b387",
							hardness: 0.2,
							behavior: [
								"XX|XX|XX",
								"XX|XX|XX",
								"SW:wet_sand%1.5 AND M2|SW:wet_sand%2.5 AND M1|SW:wet_sand%1.5 AND M2"
							],
							reactions: {
								"water": { "elem1":"sandy_water", "elem2":"sandy_water", "chance":0.001 },
								"sand": { "elem1": [null,null,"wet_sand"], "elem2": "wet_sand", },
								"sandy_water": { "elem1":["water","water","sand_sediment"], "chance":0.001 },
								"wet_sand": { "elem2": "sand_sediment", "chance": 0.0005 },
							},
							tempHigh: 1700,
							stateHigh: "molten_glass",
							category: "land",
							state: "solid",
							density: 1602,
							breakInto: "sand",
							tick: function(pixel) {
								sedimentation(pixel,sandstoneLithificationElements,"sandstone")
							},
						}

					//Reactions to add

						elements.wet_sand.reactions.sand_sediment = {
							elem1: "sand_sediment",
							chance: 0.0003
						};

						elements.wet_sand.reactions.wet_sand = {
							elem1: "sand_sediment",
							chance: 0.0003
						};

					//Final rock

						elements.sandstone = {
							color: ["#b27853", "#d1a784", "#d1a784", "#d4996e"],
							behavior: behaviors.WALL,
							tempHigh: 1500,
							stateHigh: "molten_glass",
							category: "land",
							state: "solid",
							density: 2323, //wide range
							hardness: 0.5,
							breakInto: "sand",
						}

					//Worldgen preset for testing

						worldgentypes.sandstone_test_ocean = {
							layers: [
								[0.9, "wet_sand", 0.2],
								[0.9, "sand", 0.2],
								[0.8, "sandy_water", 0.7],
								[0.25, "water"],
								[0.1, "sand", 0.1],
								[0.1, "clay", 0.1],
								[0.1, "gravel", 0.2],
								[0.1, "wet_sand"],
								[0.03, "gravel", 0.5],
								[0.03, "rock"],
								[0, "basalt"],
							]
						};

					//Changes to vanilla desert

						worldgentypes.desert = {
							layers: [
								[0.95, "gravel", 0.6],
								[0.65, "bone", 0.03],
								[0.65, "sand"],
								[0.55, "bone", 0.02],
								[0.3, "sandstone"],
								[0.05, "rock"],
								[-0.78, "basalt"]
							],
							temperature: 38
						};
						
				//Grains > 2 mm
				
					//Angular fragments

						//Breccia

					//Rounded fragments
					
						//Conglomerate
	
	//Gems
	  //There is a mineral classification scheme, but it will take a while to implement if I ever get around to it.
	  //We're assuming that the crystal structures reform properly because I don't want to have to research and implement refrozen amorphous forms.

		//Emerald
		
			elements.emerald = {
				color: ["#31e31e", "#88fa5a", "#28d419", "#54e823", "#64f235"],
				tempHigh: 1287,
					//1: I can't be arsed to find out what happens to emerald in extreme heat. Apparently, neither can anyone else, and Google is useless for this.
					//2: So I'm just assuming that the chromium impurities are polite and remain in solution with the molten beryl.
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 2710, //within natural variation
				hardness: 0.8, //Mohs scaled to diamond
			};

		//Amethyst

			elements.amethyst = {
				color: ["#c569e0", "#bd43e0", "#e37aeb", "#ab2fe0", "#b05bd4", "#9b2cdb"],
				tempHigh: 1650,
				//1: Gee, another quartz-like...
				//2: Like with emerald, I'm trusting the impurities to stay dissolved because I don't exactly have any amethyst laying around to melt.
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 2650,
				hardness: 0.7,
			};

		//Sapphire

			elements.sapphire = {
				color: ["#2d43e3", "#4d5fe3", "#1f30cc", "#375fdb", "#2d39e3"],
				tempHigh: 2040,
					//1: You can actually grow corundum-based gems through the Verneuil process
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 3980,
				hardness: 0.9,
			}

		//Ruby

			elements.ruby = {
				//Corundum with different impurities, so I can copy/paste everything but the color
				color: ["#ff1222", "#ff4545", "#e30b13", "#fa253b", "#f2120f"],
				tempHigh: 2040,
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 3980,
				hardness: 0.9,
			}

		//Topaz

			elements.topaz = {
				color: ["#f7f431", "#ffff5c", "#f7e048", "#fae43e", "#fff86e", "#ede321"],
				tempHigh: 1340,
				stateHigh: "mullite", //thermal decomposition
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 3500,
				hardness: 0.8,
			};
			
		//Mullite

			elements.mullite = {
				color: ["#f2d7bf", "#f5cbdc", "#f2dfd3"], //hardly a gemstone, but i will color it like the others regardless
				tempHigh: 1840,
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 3110,
				hardness: 0.7,
			};

		//Onyx

			elements.onyx = {
				color: ["#1a1919", "#070605", "#111313"],
				tempHigh: 1650, //another  silicate  mineral
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 2650,
				hardness: 0.7,
			};

		//Opal

			elements.opal = {
				color: ["#ffcfcf", "#fff0d9", "#fcf7c5", "#e4ffd4", "#d1fff5", "#dcecfa", "#dfdbff", "#f5e0ff", "#f7d0f1"],
				tempHigh: 100,
				stateHigh: ["broken_opal", "broken_opal", "broken_opal", "broken_opal", "broken_opal", "broken_opal", "broken_opal", "broken_opal", "broken_opal", "steam"],
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 2090,
				hardness: 0.6,
				breakInto: ["quartz", "quartz", "quartz", "quartz", "quartz", "quartz", "quartz", "quartz", "quartz", "water"],
			};

			elements.broken_opal = {
				color: ["#f5e6e6", "#ebe2d5", "#f7f6ed", "#e4eddf", "#d8ebe7", "#d8e0e8", "#e4e3e8", "#f4edf7", "#ebebeb"],
				tempHigh: 1650,
				stateHigh: "molten_quartz",
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 2322,
				hardness: 0.55, //it cracks
			};

		//Quartz

			elements.quartz = { //silicates, silicates, and more silicates
				color: ["#f0f0f0", "#e3e3e3", "#f7f7f7"],
				tempHigh: 1650, 
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 2650,
				hardness: 0.7,
			};

			//Re-add molten quartz because it stopped auto-generating
			
			elements.molten_quartz = {"behavior":behaviors.MOLTEN,"hidden":true,"state":"liquid","category":"states","color":['#ffff78', '#fff078', '#ffb400', '#ffff71', '#ffe371', '#ffaa00', '#ffff7b', '#fff77b', '#ffb900'],"temp":1650,"tempLow":1550,"stateLow":"quartz","density":2385,"viscosity":10000,"reactions":{"ash":{"elem1":null,"elem2":"molten_slag"},"dust":{"elem1":null,"elem2":"molten_slag"},"magma":{"elem1":null,"elem2":"molten_slag"}},"movable":true}

			//Use in glass

			elements.molten_quartz.reactions = {
				quicklime: { elem1: "molten_glass", elem2: ["quicklime", "quicklime", "quicklime", "quicklime", "quicklime", "quicklime", "quicklime", "quicklime", "quicklime", null]} //lack of vanilla washing soda, lack of tripartite reactions
			};
			/*
			elements.elem1.reactions = {
				elem2: { elem1: "elem1_becomes", elem2: "elem2_becomes"}
			};
			*/
		
		//Pearl (not a mineral)

			elements.pearl = {
				color: ["#e3e3e3", "#e3e0d1", "#eddbce", "#eef2c9", "#d5f5dc", "#d8f2ec", "#fadcf9", "#e3d1c1", "#f2edc9", "#e0f5d7", "#e2beeb", "#e3e3e3", "#e3e0d1", "#eddbce", "#eef2c9", "#d5f5dc", "#d8f2ec", "#fadcf9", "#e3d1c1", "#f2edc9", "#e0f5d7", "#e2beeb", 	"#38332e"],
				tempHigh: 1340, //yay, more thermal decomposition elements
				behavior: behaviors.POWDER,
				category: "powders",
				state: "solid",
				density: 772, //It is partly made of proteins and is said to burn, but I can't find an ignition point, so here it melts.
				hardness: 0.45,
			};

	//Soil

		//Dry dirt

			elements.dry_dirt = {
				color: ["#a88e5e","#8f7950","#8a7045","#9e804c"],
				behavior: [
					"XX|SW:dirt%3 AND SW:mud%6|XX",
					"XX|XX|XX",
					"M2|M1|M2",
				],
				tempHigh:1200,
				stateHigh: "molten_dirt",
				tempLow: -50,
				stateLow: "dry_permafrost",
				category:"land",
				state: "solid",
				density: 1100,
			},

			elements.molten_dirt = { //added manually because the change to dirt will prevent molten_dirt from being auto-generated
				"behavior": behaviors.MOLTEN,
				"hidden": true,
				"state": "liquid",
				"category": "states",
				"color": ["#EC6A15", "#EC5515", "#EC3F00", "#B85210", "#B84210", "#B83100", "#AE4B0D", "#AE3C0D", "#AE2D00", "#D65A0F", "#D6480F", "#D63600"],
				"temp": 1200,
				"tempLow": 1100,
				"stateLow": "dry_dirt",
				"density": 1098,
				"viscosity": 10000
			}

			if(enabledMods.includes("mods/boiling_rock.js")) {
				elements.molten_dirt.tempHigh = 3000;
				elements.molten_dirt.stateHigh = "vaporized_rock";
			};

			elements.dry_permafrost = {
				color: ["#5B7870","#535D51","#52746A","#5A7A6F"],
				behavior: behaviors.POWDER, //not enough water for cementing
				temp: -50,
				tempHigh: 10,
				stateHigh: "dry_dirt",
				category: "land",
				state: "solid",
				density: 1200,
			}

			elements.dirt.tempHigh = 110;
			elements.dirt.stateHigh = "dry_dirt";

			elements.water.reactions.dry_dirt = { elem1: null, elem2: "dirt", chance: 0.1 }

			if(!elements.mud.reactions) {
				elements.mud.reactions = {};
			};
			elements.mud.reactions.dry_dirt = { elem1: "dirt", elem2: "dirt", chance: 0.06 }

	//Land Element Cults
		/*
		"Cult" is used similarly to its EoD sense; here, it signifies a set of elements that systematically replicates another set of elements except for a given modification.
		In this case, they replicate some land elements; a "yellow" cult, for example, would have yellow_dirt, yellow_mud, yellow_mudstone, yellow_permafrost, yellow_sand...
		*/

		//Irradiated land

			//Irradiated behavior cult (see above)

				behaviors.RAD_POWDER = [
					"XX|CR:radiation%2|XX",
					"CR:radiation%2|XX|CR:radiation%2",
					"M2|M1 AND CR:radiation%2|M2",
				],
				behaviors.RAD_STURDYPOWDER = [
					"XX|CR:radiation%2|XX",
					"CR:radiation%2|XX|CR:radiation%2",
					"XX|M1 AND CR:radiation%2|XX",
				],
				behaviors.RAD_SUPPORT = [
					"CR:radiation%1|CR:radiation%2|CR:radiation%1",
					"SP AND CR:radiation%2|XX|SP AND CR:radiation%2",
					"XX|M1 AND CR:radiation%2|XX",
				],
				behaviors.RAD_SUPPORTPOWDER = [
					"CR:radiation%1|CR:radiation%2|CR:radiation%1",
					"SP AND CR:radiation%2|XX|SP AND CR:radiation%2",
					"M2|M1 AND CR:radiation%2|M2",
				],
				behaviors.RAD_LIQUID = [
					"XX|CR:radiation%2|XX",
					"M2 AND CR:radiation%2|XX|M2 AND CR:radiation%2",
					"M1|M1 AND CR:radiation%2|M1",
				],
				behaviors.RAD_WALL = [
					"CR:radiation%0.7|CR:radiation%1.4|CR:radiation%0.7",
					"CR:radiation%1.4|XX%0000000000000|CR:radiation%1.4",
					"CR:radiation%0.7|CR:radiation%1.4|CR:radiation%0.7",
				],
				behaviors.RAD_GAS = [
					"M2 AND CR:radiation%1|M1 AND CR:radiation%2|M2 AND CR:radiation%1",
					"M1 AND CR:radiation%2|XX AND CR:radiation%2|M1 AND CR:radiation%2",
					"M2 AND CR:radiation%1|M1 AND CR:radiation%2|M2 AND CR:radiation%1",
				],
				behaviors.RAD_MOLTEN = [
					"XX|CR:radiation%2.5 AND CR:fire%2.5|XX",
					"M2 AND CR:radiation%1|XX|M2 AND CR:radiation%1",
					"M1|M1 AND CR:radiation%1|M1",
				]

				//console.log(behaviors.RAD_POWDER) //forcing it to acknowledge the behaviors i just added instead of giving me "undefined"
				
			//Setting reactions (we'll define the elements later)
			
				var namelessArray = ["dirt","sand","mud","wet_sand"];
				for(i = 0; i < namelessArray.length; i++) {
					var elementt = namelessArray[i];
					if(!elements[elementt].reactions) {
						elements[elementt].reactions = {};
					};
				};
			
				elements.water.reactions.radiation = { elem1: "irradiated_water", elem2: null, chance:0.25 },
				elements.radiation.reactions.water = { elem2: "irradiated_water", elem1: null, chance:0.25 },
				elements.dirt.reactions.radiation = { elem1: "irradiated_dirt", elem2: null, chance:0.25 },
				elements.radiation.reactions.dirt = { elem2: "irradiated_dirt", elem1: null, chance:0.25 },
				elements.sand.reactions.radiation = { elem1: "irradiated_sand", elem2: null, chance:0.25 },
				elements.radiation.reactions.sand = { elem2: "irradiated_sand", elem1: null, chance:0.25 },
				elements.mud.reactions.radiation = { elem1: "irradiated_mud", elem2: null, chance:0.25 },
				elements.radiation.reactions.mud = { elem2: "irradiated_mud", elem1: null, chance:0.25 },
				elements.wet_sand.reactions.radiation = { elem1: "irradiated_wet_sand", elem2: null, chance:0.25 },
				elements.radiation.reactions.wet_sand = { elem2: "irradiated_wet_sand", elem1: null, chance:0.25 },

			//Substitution table

				irradiatedObject = {
					dirt:				"irradiated_dirt",
					molten_dirt:		"molten_irradiated_dirt",
					glass:				"irradiated_glass",
					molten_glass:		"molten_irradiated_glass",
					glass_shard:		"irradiated_glass_shard",
					sand:				"irradiated_sand",
					mud:				"irradiated_mud",
					wet_sand:			"irradiated_wet_sand",
					water:				"irradiated_water",
					permafrost:			"irradiated_permafrost",
					mudstone:			"irradiated_mudstone",
					packed_sand:		"irradiated_packed_sand",
					ice:				"irradiated_ice",
					snow:				"irradiated_snow",
					packed_snow:		"irradiated_packed_snow",
					rain_cloud:			"rad_cloud",
					snow_cloud:			"rad_snow_cloud",
					snow_cloud_floater:	"rad_snow_cloud_floater",
					rock:				"irradiated_rock",
					gravel:				"irradiated_gravel",
					basalt:				"irradiated_basalt",
					magma:				"irradiated_magma",
					sandstone:			"irradiated_sandstone",
					sand_sediment: 		"irradiated_sand_sediment"
				};
			
			//Reverse lookup function

				function getKeyByValue(object, value) {
				  return Object.keys(object).find(key => object[key] === value);
				}
				//getKeyByValue code by UncleLaz on StackOverflow: https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value"

			//Main elements

				elements.irradiated_dirt = {
					color: ["#70762b","#4c5c21","#50571a","#4c6b1e"],
					behavior: behaviors.RAD_POWDER,
					tempHigh:1200,
					stateHigh: "molten_irradiated_dirt",
					reactions: {
						"dirt": { "elem1":"dirt", "elem2":"irradiated_dirt", "chance":0.0005, "oneway":true },
					},
					tempLow: -50,
					stateLow: "irradiated_permafrost",
					category: "Irradiated",
					state: "solid",
					density: 1220,
				};

				elements.molten_irradiated_dirt = {
					"behavior": behaviors.RAD_MOLTEN,
					"hidden": true,
					"state": "liquid",
					"category": "Irradiated",
					"color": ["#e09315", "#e07615", "#e05800", "#987310", "#985c10", "#984500", "#a06c0d", "#a0570d", "#a04100", "#98850f", "#986b0f", "#985000"],
					"temp": 1250,
					"tempLow": 1100,
					"stateLow": "irradiated_dirt",
					"density": 1098,
					"viscosity": 10000
				}

				elements.irradiated_glass = {
					color: ["#597a58","#719171"],
					colorOn: ["#6dab67","#88b567"],
					behavior: behaviors.RAD_WALL,
					tempHigh: 1500,
					category: "solids",
					state: "solid",
					density: 2500,
					breakInto: "irradiated_glass_shard",
					conduct: 0.01,
				};

				elements.molten_irradiated_glass = {
					behavior: behaviors.RAD_MOLTEN,
					category: "Irradiated",
				};

				elements.irradiated_glass_shard = {
					color: ["#597a58","#719171", "#628263"],
					colorOn: ["#6dab67","#88b567", "#7bad6f"],
					behavior: behaviors.RAD_POWDER,
					tempHigh: 1500,
					stateHigh: "molten_irradiated_glass",
					category: "powders",
					state: "solid",
					density: 2500,
					conduct: 0.01,
				};

				elements.irradiated_sand = {
					color: "#cbdb7b",
					behavior: behaviors.RAD_POWDER,
					tempHigh: 1700,
					stateHigh: "molten_irradiated_glass",
					category: "Irradiated",
					state: "solid",
					density: 1602
				};

				elements.irradiated_mud = {
					color: "#3c401c",
					behavior: behaviors.RAD_STURDYPOWDER,
					reactions: {
						"irradiated_dirt": { "elem1":"irradiated_dirt", "elem2":"irradiated_mud", "chance":0.0005, "oneway":true },
						"irradiated_sand": { "elem1":"irradiated_dirt", "elem2":"irradiated_wet_sand", "chance":0.0005, "oneway":true },
						"sand": { "elem1":"irradiated_dirt", "elem2":"irradiated_wet_sand", "chance":0.0005, "oneway":true },
						"dirt": { "elem1":"irradiated_dirt", "elem2":"irradiated_mud", "chance":0.0005, "oneway":true },
					},
					tempHigh: 100,
					stateHigh: "irradiated_mudstone",
					tempLow: -50,
					stateLow: "irradiated_permafrost",
					category: "Irradiated",
					state: "solid",
					density: 1730,
					stain: 0.02,
				};

				elements.irradiated_wet_sand = {
					color: ["#848c3a","#969e4c"],
					behavior: behaviors.RAD_STURDYPOWDER,
					reactions: {
						"irradiated_sand": { "elem1":"irradiated_sand", "elem2":"irradiated_wet_sand", "chance":0.0005, "oneway":true },
						"irradiated_dirt": { "elem1":"irradiated_sand", "elem2":"irradiated_mud", "chance":0.0005, "oneway":true },
						"sand": { "elem1":"irradiated_sand", "elem2":"irradiated_wet_sand", "chance":0.0005, "oneway":true },
						"dirt": { "elem1":"irradiated_sand", "elem2":"irradiated_mud", "chance":0.0005, "oneway":true },
						"wet_sand": { "elem1":"irradiated_sand", "elem2":"irradiated_sand_sediment", "chance":0.0005, "oneway":true },
						"sand_sediment": { "elem1":"irradiated_sand", "elem2":"irradiated_sand_sediment", "chance":0.0005, "oneway":true },
						"irradiated_wet_sand": { "elem1":"irradiated_sand", "elem2":"irradiated_sand_sediment", "chance":0.0005, "oneway":true },
						"irradiated_sand_sediment": { "elem1":"irradiated_sand", "elem2":"irradiated_sand_sediment", "chance":0.0005, "oneway":true },
					},
					tempHigh: 100,
					stateHigh: "irradiated_packed_sand",
					category: "Irradiated",
					state: "solid",
					density: 1905,
				};

				elements.irradiated_sandy_water = {
					color: ["#84A244", "#90AE50"],
					behavior: behaviors.RAD_LIQUID,
					tempHigh: 100,
					stateHigh: ["rad_steam","rad_steam","irradiated_sand"],
					//tempLow: 0,
					//stateLow: "irradiated_sandy_ice",
					category: "Irradiated",
					heatCapacity: 4.184, //unimplemented
					reactions: {
						"dirt": { // React with (water reacts with dirt to make mud)
							"elem1": [null,null,"irradiated_wet_sand"], // First element transforms into; in this case, water deletes itself
							"elem2": "irradiated_mud", // Second element transforms into; in this case, dirt turns to mud
						},
						"irradiated_dirt": { // React with (water reacts with dirt to make mud)
							"elem1": [null,null,"irradiated_wet_sand"], // First element transforms into; in this case, water deletes itself
							"elem2": "irradiated_mud", // Second element transforms into; in this case, dirt turns to mud
						},
						"water": { "elem1":"irradiated_water", "elem2":"irradiated_sandy_water", "chance":0.025 },
						"irradiated_water": { "elem1":"irradiated_water", "elem2":"irradiated_sandy_water", "chance":0.025 },
						"sand": { "elem1": [null,null,"irradiated_wet_sand"], "elem2": "irradiated_wet_sand", },
						"irradiated_sand": { "elem1": [null,null,"irradiated_wet_sand"], "elem2": "irradiated_wet_sand", },
						"sandy_water": { "elem1":"irradiated_wet_sand", "elem2":"irradiated_sand_sediment", "chance": 0.001 },
						"irradiated_sandy_water": { "elem1":"irradiated_wet_sand", "elem2":"irradiated_sand_sediment", "chance": 0.001 },
						"wet_sand": { "elem1": "irradiated_water", "elem2":"irradiated_sand_sediment", "chance": 0.0005 },
						"irradiated_wet_sand": { "elem1": "irradiated_water", "elem2":"irradiated_sand_sediment", "chance": 0.0005 },
						/*"salt": { "elem1": "salt_water", "elem2": null },
						"sugar": { "elem1": "sugar_water", "elem2": null, },
						"dust": { "elem1": "dirty_water", "elem2": null, },
						"ash": { "elem1": "dirty_water", "elem2": null, },
						"cyanide": { "elem1": "dirty_water", "elem2": null, },
						"carbon_dioxide": { "elem1": "seltzer", "elem2": null, "oneway":true },
						"sulfur": { "elem1": "dirty_water", "elem2": null, },
						"rat": { "elem1": "dirty_water", chance:0.005 },
						"plague": { "elem1": "dirty_water", "elem2": null, },
						"rust": { "elem1": "dirty_water", chance:0.005 },
						"fallout": { "elem1": "dirty_water", chance:0.25 },
						"radiation": { "elem1": "dirty_water", chance:0.25 },
						"uranium": { "elem1": "dirty_water", chance:0.25 },
						"rotten_meat": { "elem1": "dirty_water", chance:0.25 },
						"quicklime": { "elem1": [null,null,"wet_sand"], "elem2": "slaked_lime", },
						"rock": { "elem2": "wet_sand", "chance": 0.00035 },
						"ruins": { "elem2": "rock", "chance": 0.00035 },*/
						"mudstone": { "elem2": "irradiated_mud", "chance": 0.00035 },
						"irradiated_mudstone": { "elem2": "irradiated_mud", "chance": 0.00035 },
						//"methane": { "elem1":"primordial_soup", "elem2":"primordial_soup", tempMin:60, charged:true },
						//"ammonia": { "elem1":"primordial_soup", "elem2":"primordial_soup", tempMin:60, charged:true },
						"fly": { "elem2":"dead_bug", "chance":0.1, "oneway":true },
						"firefly": { "elem2":"dead_bug", "chance":0.1, "oneway":true },
						"bee": { "elem2":"dead_bug", "chance":0.05, "oneway":true },
						"stink_bug": { "elem2":"dead_bug", "chance":0.1, "oneway":true },
					},
					state: "liquid",
					density: 1097,
					conduct: 0.02,
					stain: 0.01,
				}

				elements.irradiated_sand_sediment = {
					hidden: true,
					color: "#afd182",
					hardness: 0.2,
					behavior: [
						"XX|XX|XX",
						"XX|XX|XX",
						"SW:wet_sand,irradiated_wet_sand%1.5 AND M2|SW:wet_sand,irradiated_wet_sand%2.5 AND M1|SW:wet_sand,irradiated_wet_sand%1.5 AND M2"
					],
					reactions: {
						"water": { "elem1":"irradiated_sandy_water", "elem2":"irradiated_sandy_water", "chance":0.025 },
						"irradiated_water": { "elem1":"irradiated_sandy_water", "elem2":"irradiated_sandy_water", "chance":0.025 },
						"sand": { "elem1": [null,null,"irradiated_wet_sand"], "elem2": "irradiated_wet_sand", },
						"irradiated_sand": { "elem1": [null,null,"irradiated_wet_sand"], "elem2": "irradiated_wet_sand", },
						"sandy_water": { "elem1":["irradiated_water","irradiated_water","irradiated_sand_sediment"], "chance":0.001 },
						"irradiated_sandy_water": { "elem1":["irradiated_water","irradiated_water","irradiated_sand_sediment"], "chance":0.001 },
						"wet_sand": { "elem2": "irradiated_sand_sediment", "chance": 0.0005 },
						"irradiated_wet_sand": { "elem2": "irradiated_sand_sediment", "chance": 0.0005 },
					},
					tempHigh: 1700,
					stateHigh: "molten_irradiated_glass",
					category: "Irradiated",
					state: "solid",
					density: 1602,
					breakInto: "irradiated_sand",
					tick: function(pixel) {
						sedimentation(pixel,sandstoneLithificationElements,"irradiated_sandstone")
					},
				}

				elements.irradiated_sandstone = {
					color: ["#85b357", "#b5d177", "#9cd184", "#7bc25f"],
					behavior: behaviors.RAD_WALL,
					tempHigh: 1500,
					stateHigh: "molten_irradiated_glass",
					category: "Irradiated",
					state: "solid",
					density: 2323, //wide range
					hardness: 0.5,
					breakInto: "irradiated_sand",
				}

				elements.irradiated_water = {
					color: "#85cf57",
					behavior: behaviors.RAD_LIQUID,
					tempHigh: 100,
					stateHigh: ["rad_steam","rad_steam","fallout"],
					tempLow: -5,
					stateLow: "irradiated_ice",
					category: "Irradiated",
					heatCapacity: 4.184,
					reactions: {
						"water": { elem1: "water", elem2: "irradiated_water", chance:0.05 }, //swap
						"dirt": { // React with (water reacts with dirt to make mud)
							"elem1": null, // First element transforms into; in this case, water deletes itself
							"elem2": "irradiated_dirt", // Second element transforms into; in this case, dirt turns to mud
						},
						"sand": { "elem1": null, "elem2": "irradiated_wet_sand", },
						"wet_sand": { "elem1": "irradiated_sandy_water", "elem2": ["irradiated_wet_sand","irradiated_wet_sand","irradiated_wet_sand","irradiated_wet_sand","irradiated_wet_sand",null], chance: 0.01 },
						"irradiated_wet_sand": { "elem1": "irradiated_sandy_water", "elem2": ["irradiated_wet_sand","irradiated_wet_sand","irradiated_wet_sand","irradiated_wet_sand","irradiated_wet_sand",null], chance: 0.01 },
						"rat": { "elem2": "rotten_meat", chance:0.005 },
						"plague": { "elem2": null, chance: 0.3, },
						//"quicklime": { "elem1": null, "elem2": "slaked_lime", },
						"rock": { "elem2": "irradiated_wet_sand", "chance": 0.00035 },
						//"ruins": { "elem2": "rock", "chance": 0.00035 },
						"mudstone": { "elem2": "irradiated_mud", "chance": 0.00035 },
						"irradiated_mudstone": { "elem2": "irradiated_mud", "chance": 0.00035 },
						"packed_sand": { "elem2": "irradiated_wet_sand", "chance": 0.00035 },
						"irradiated_packed_sand": { "elem2": "irradiated_wet_sand", "chance": 0.00035 },
						"fly": { "elem2":"dead_bug", "chance":0.1, "oneway":true },
						"firefly": { "elem2":"dead_bug", "chance":0.1, "oneway":true },
						"bee": { "elem2":"dead_bug", "chance":0.05, "oneway":true },
						"stink_bug": { "elem2":"dead_bug", "chance":0.1, "oneway":true },
					},
					state: "liquid",
					density: 997,
					conduct: 0.03,
					stain: 0.02,
				}

				elements.rad_steam.behavior = behaviors.RAD_GAS;
				elements.rad_steam.stateLow = "irradiated_water";
				elements.rad_cloud.behavior =  [
					"XX|XX|XX",
					"XX|CH:fallout,radiation,irradiated_water%0.025|M1%2.5 AND BO",
					"CR:radiation%0.05|CR:radiation%0.05|CR:radiation%0.05",
				];
				elements.rad_cloud.tempLow = 0;
				elements.rad_cloud.stateLow = "rad_snow_cloud";
				elements.fallout.behavior = behaviors.RAD_POWDER;

				elements.irradiated_permafrost = {
					color: ["#51613d","#495234","#3b4a30","#4a4f35"],
					behavior: behaviors.RAD_SUPPORT,
					temp: -50,
					tempHigh: 10,
					stateHigh: "irradiated_mudstone",
					category: "Irradiated",
					state: "solid",
					density: 700,
				};

				elements.irradiated_mudstone = {
					color: "#4f5e25",
					behavior: behaviors.RAD_SUPPORT,
					tempHigh:1200,
					stateHigh: "molten_irradiated_dirt",
					tempLow: -50,
					stateLow: "irradiated_permafrost",
					category: "Irradiated",
					state: "solid",
					density: 1250,
					breakInto: "irradiated_dirt",
				};

				elements.irradiated_packed_sand = {
					color: "#79945c",
					behavior: behaviors.RAD_SUPPORT,
					tempHigh: 1700,
					stateHigh: "molten_irradiated_glass",
					category: "Irradiated",
					state: "solid",
					density: 1682,
					breakInto: "irradiated_sand",
				};

				elements.irradiated_ice = {
					color: "#b7e0b4",
					behavior: behaviors.RAD_WALL,
					temp: 0,
					tempHigh: 5,
					stateHigh: "irradiated_water",
					category: "solids",
					state: "solid",
					density: 917,
					breakInto: "irradiated_snow",
				};

				elements.irradiated_snow = {
					color: "#d5f2d3",
					behavior: behaviors.RAD_POWDER,
					temp: 0,
					tempHigh: 5,
					tempLow: -100,
					stateLow: "irradiated_packed_snow",
					stateHigh: "irradiated_water",
					category: "Irradiated",
					state: "solid",
					density: 100,
				};

				elements.irradiated_packed_snow = {
					color: "#a7d4a3",
					behavior: behaviors.RAD_SUPPORTPOWDER,
					temp: 0,
					tempHigh: 20,
					tempLow: -200,
					stateLow: "irradiated_ice",
					stateHigh: "irradiated_water",
					category: "Irradiated",
					state: "solid",
					density: 400,
					hidden: true,
				};

				elements.rad_snow_cloud = {
					color: ["#2d6e31","#416e21"],
					behavior: [
						"XX|XX|XX",
						"XX|CH:fallout,radiation,irradiated_snow%0.025|M1%2.5 AND BO",
						"CR:radiation%0.05|CR:radiation%0.05|CR:radiation%0.05",
					],
					category:"Irradiated",
					hidden: true,
					state: "gas",
					density: 0.5,
					ignoreAir: true,
					temp: -20,
					tempHigh: 0,
					stateHigh: "rad_cloud",
				};

				elements.rad_snow_cloud_floater = {
					color: ["#2d6e31","#416e21"],
					behavior: [
						"M2|M1|M2",
						"M1%80|CH:rad_snow_cloud_%0.2|M1%80",
						"M%60|XX|M2%60",
					],
					reactions: {
						"rad_snow_cloud_floater": { elem1: "rad_snow_cloud", elem2: "rad_snow_cloud", chance: 0.003 },
						"rad_snow_cloud": { elem1: "rad_snow_cloud", elem2: "rad_snow_cloud", chance: 0.01 }
					},
					category:"Irradiated",
					hidden: true,
					state: "gas",
					density: 0.5,
					temp: -20,
					tempHigh: 0,
					stateHigh: "rad_cloud",
				};

				elements.irradiated_rock = {
					color: ["#768063","#444f3f","#7a9476"],
					behavior: behaviors.RAD_POWDER,
					tempHigh: 950,
					stateHigh: "irradiated_magma",
					category: "Irradiated",
					state: "solid",
					density: 2550,
					hardness: 0.5,
					breakInto: ["irradiated_sand","irradiated_gravel"],
				};

				elements.irradiated_gravel = {
					color: ["#d1e3c8","#a6b090","#657360","#4d523f"],
					behavior: behaviors.RAD_POWDER,
					category: "Irradiated",
					tempHigh: 950,
					stateHigh: "irradiated_magma",
					state: "solid",
					density: 1680,
					hardness: 0.2,
					breakInto: "irradiated_sand",
				};

				elements.irradiated_basalt = {
					color: ["#262e20","#23331f","#3f4235"],
					behavior: behaviors.RAD_STURDYPOWDER,
					tempHigh: 1262.5,
					stateHigh: "irradiated_magma",
					category: "Irradiated",
					state: "solid",
					density: 3000,
					hardness: 0.65,
					breakInto: "irradiated_gravel",
				};

				elements.irradiated_magma = {
					color: ["#ff9100","#ffae00","#ff8400"],
					behavior: behaviors.RAD_MOLTEN,
					reactions: {
						"ice": { "elem1": "irradiated_basalt" },
						"irradiated_ice": { "elem1": "irradiated_basalt" },
						"magma": { "elem1":"magma", "elem2":"irradiated_magma", "chance":0.0005, "oneway":true },
					},
					temp: 1500,
					tempLow: 850,
					stateLow: ["irradiated_basalt","irradiated_basalt","irradiated_basalt","irradiated_rock"],
					viscosity: 5000,
					category: "Irradiated",
					state: "liquid",
					density: 2725,
				};

				//(Just for fun)

				elements.super_irradiator = {
					color: "#66ee33",
					tick: function(pixel) {
						var twentiethOfTemp = pixel.temp / 20;
						var roundOf20th = Math.round(twentiethOfTemp);
						var boundedR20 = Math.max(1,Math.min(roundOf20th,11));
						transformAround(pixel,boundedR20,irradiatedObject)
					},
					category:"machines",
					insulate: true,
					state: "solid",
				};

				elements.super_deirradiator = {
					color: "#dd33ee",
					tick: function(pixel) {
						var twentiethOfTemp = pixel.temp / 20;
						var roundOf20th = Math.round(twentiethOfTemp);
						var boundedR20 = Math.max(1,Math.min(roundOf20th,11));
						transformAround(pixel,boundedR20,irradiatedObject,reverse=true)
					},
					category:"machines",
					insulate: true,
					state: "solid",
				};

				elements.liquid_irradium = {
					color: "#5499FF",
					behavior: behaviors.RAD_LIQUID,
					tick: function(pixel) {
						for(i = 0; i < adjacentCoords.length; i++) {
							transformAdjacent(pixel,irradiatedObject)
						}
					},
					//Becomes rainbow sand by water or poison, as well as by protocite, or bio-ooze
					//Becomes sulfuric acid on contact with it
					//Becomes corrupt slime by elder fluid
					//Converts black tar and organic soup into itself
					//Turns either grav liquid into aether dust, as well as liquid crystal
					//Turns blood into bloodstone
					//Turns blue slime into black slime
					//Made by {mercury or bio-ooze} and protocite
					category:"liquids",
					state: "liquid",
					density: 18180,	//Cherry-picked from a Tumblr headcanon
									//https://omniblog-of-starbound.tumblr.com/post/188424072728/starbound-element-headcannon-modded-metals
					viscosity: 80.1,	//probably misinterpreting tickDelta, and w/o the game assets, I can't compare against water, so this is in relation to H2SO4 scaled to its density in cP and under the assumption that water visc = 1
				};
				
			//Inter-mod compatibility

				if(enabledMods.includes("mods/some_tf_liquids.js")) {
					elements.irradiated_basalt_gravel = {
						color: ["#394d37", "#3b452f", "#3f452a", "#2d3d2c"],
						behavior: behaviors.RAD_POWDER,
						tempHigh: 1262.5,
						stateHigh: "irradiated_magma",
						category: "Irradiated",
						state: "solid",
						density: 1975,
						hardness: 0.26,
					}
					elements.irradiated_basalt.breakInto = "irradiated_basalt_gravel";
				};

			//Worldgen preset for testing

				worldgentypes.irradiated_sandstone_test_ocean = {
					layers: [
						[0.9, "irradiated_wet_sand", 0.2],
						[0.9, "irradiated_sand", 0.2],
						[0.8, "irradiated_sandy_water", 0.7],
						[0.25, "irradiated_water"],
						[0.1, "irradiated_sand", 0.1],
						[0.1, "clay", 0.1],
						[0.1, "irradiated_gravel", 0.2],
						[0.1, "irradiated_wet_sand"],
						[0.03, "irradiated_gravel", 0.5],
						[0.03, "irradiated_rock"],
						[0, "irradiated_basalt"],
					]
				};

			/*/Water irradiation reactions (must be done last)

				waterIrradiationExclusionArray = ["irradiated_water", "irradiated_wet_sand"]
				
				filteredWaterIrradiationArray = Object.keys(elements).filter(function(e) {
					return elements[e].category === "Irradiated" && (!waterIrradiationExclusionArray.includes(e));
				});

				for(i = 0; i < filteredWaterIrradiationArray.length; i++) {
					elements.water.reactions[filteredWaterIrradiationArray[i]] = { "elem1":"irradiated_water", chance: 0.01 }
				};*/

//Generation

	//TNT world

		//Supplementary elements

			elements.oil_cloud = {
				color: "#8c4331",
				behavior: [
					"XX|XX|XX",
					"XX|CH:oil%0.05|M1%2.5 AND BO",
					"XX|XX|XX",
				],
				category:"gases",
				temp: 30,
				state: "gas",
				density: 0.5,
				burn: 60,
				burnTime: 15,
				burnInto: "explosion", //atomization moment
				ignoreAir: true,
				stain: 0.02,
			};

			elements.oil_cloud_floater = {
				color: "#8c4331",
				behavior: [
					"M2|M1|M2",
					"M1%80|CH:oil_cloud%0.2|M1%80",
					"M%60|XX|M2%60",
				],
				reactions: {
					"oil_cloud_floater": { elem1: "oil_cloud", elem2: "oil_cloud", chance: 0.003 },
					"oil_cloud": { elem1: "oil_cloud", elem2: "oil_cloud", chance: 0.01 }
				},
				category:"gases",
				temp: 30, //otherwise identical
				state: "gas",
				density: 0.5,
				burn: 60,
				burnTime: 15,
				burnInto: "explosion", //atomization moment
				stain: 0.02,
			};

		//Main preset

			worldgentypes.tnt_world = {
				name: "TNT World", //unimplemented
				layers: [
					[0.9, "oil_cloud_floater"],
					[0.65, "coal", 0.1],
					[0.65, "nitroglycerin"],
					[0.55, "nitroglycerin", 0.5],
					[0.2, "coal", 0.2],
					[0.2, "tnt"],
					[0.05, "coal", 0.3],
					[0.05, "c4"],
					[0.0, "coal", 0.4],
					[0.0, "lamp_oil"]
				]
			};

		//Inter-mod compatibility

			runAfterLoad(function() {
				if(enabledMods.includes("mods/glenn_gases.js")) {
					worldgentypes.tnt_world.layers.unshift([0.9, "red_gas", 0.50])
				};
			});

	//Ice world

		//Supplementary elements

			elements.snow_cloud_floater = {
				color: "#7e8691",
				behavior: [
					"M2|M1|M2",
					"M1%80|CH:snow_cloud%0.2|M1%80",
					"M%60|XX|M2%60",
				],
				reactions: {
					"snow_cloud_floater": { elem1: "snow_cloud", elem2: "snow_cloud", chance: 0.003 },
					"snow_cloud": { elem1: "snow_cloud", elem2: "snow_cloud", chance: 0.01 }
				},
				category:"gases",
				temp:-10,
				tempHigh:30,
				stateHigh:"rain_cloud",
				tempLow:-200,
				stateLow:"hail_cloud",
				state:"gas",
				density:0.55,
				conduct:0.01,
				movable:true,
				isGas:true
			};
			
		//Main preset

			worldgentypes.ice = {
				layers: [
					//[0.95, "snow_cloud_floater"], //le cutting room floor has arrived
					[0.9, "snow"],
					[0.65, "ice"],
					[0.6, "gravel"],
					[0.35, "permafrost"],
					[0, "rock"]
				],
				temperature: -20
			};

	//Nuclear wasteland

		//Elements defined above
			
		//Main preset

			worldgentypes.nuclear_wasteland = {
				layers: [
					[0.9, "smoke", 0.5],
					[0.9, "rad_snow_cloud_floater", 0.75],
					[0.82, "fallout", 0.4],
					[0.7, "liquid_irradium", 0.05],
					[0.7, "dead_plant", 0.12],
					[0.55, "irradiated_dirt"],
					[0.45, "irradiated_rock"],
					[0.25, "uranium", 0.4],
					[0.35, "irradiated_rock", 0.5],
					[0.3, "irradiated_gravel", 0.5],
					[0.2, "uranium", 0.2],
					[0.05, "rock"],
					[0, "basalt"],
				],
				temperature: -5 //nuclear winter
			};

	//Dark world

	worldgentypes.dark = {
		layers: [
			[0.8, "carbon_dioxide"],
			[0.65, "ink"],
			[0.5, "charcoal"],
			[0, "basalt"]
		]
	};

	//Money world
	
	worldgentypes.money = {
		layers: [
			[0.9, "emerald"],
			[0.6, "diamond"],
			[0.3, "gold_coin"],
			[0.1, "ruby", 1/3],
			[0.1, "amethyst", 1/2],
			[0.1, "sapphire"],
			[-0.1, "pearl", 0.4],
			[-0.1, "onyx"]
		]
	};
	
	//Irradiated Desert

		//Main preset

			worldgentypes.nuclear_wasteland_desert = {
				layers: [
					[0.97, "fallout", 0.4],
					[0.95, "irradiated_gravel", 0.6],
					[0.65, "liquid_irradium", 0.01],
					[0.65, "cancer", 0.02],
					[0.65, "bone", 0.02],
					[0.65, "irradiated_sand"],
					[0.55, "cancer", 0.01],
					[0.55, "bone", 0.01],
					[0.3, "irradiated_sandstone"],
					[0.05, "irradiated_rock"],
					[-0.78, "irradiated_basalt"]
				],
				temperature: -13
			};
			
