var modName = "mods/prop.js";
var variablesMod = "mods/prop and prompt variables.js";

if(enabledMods.includes(variablesMod)) {
	propProperty = "element";
	propValue = "sand";
	propType = "string";
	numberAdjusterProperty = "temp";
	numberAdjusterValue = 1;
	numberAdjusterMode = "add";
	numberAdjusterVerb = "adding";

	function rgbStringToUnvalidatedObject(string) {
		string = string.split(",");
		var red = parseFloat(string[0].substring(4));
		var green = parseFloat(string[1]);
		var blue = parseFloat(string[2].slice(0,-1));
		return {r: red, g: green, b: blue};
	};
	function hslStringToUnvalidatedObject(string) {
		string = string.split(",");
		var hue = parseFloat(string[0].substring(4));
		var saturation = parseFloat(string[1].slice(0,-1));
		var lightness = parseFloat(string[2].slice(0,-2));
		return {h: hue, s: saturation, l: lightness};
	};


	document.addEventListener("keydown", function(e) { //prop prompt listener
		// , = propPrompt()
		if (e.keyCode == 188) {
			e.preventDefault();
			shiftDown ? numberAdjusterPrompt() : propPrompt();
		};
	});

	function propPrompt() {
		propProperty = prompt("Enter the property you want to set");
		

		propValue = prompt("Enter the value you want to set to");

		//special check: element
		if(propProperty === "element") {
			//empty string
			if(propValue === "") {
				alert("No element was specified!");
				return false;
			};
			// replace spaces with underscores
			propValue = propValue.replace(/ /g, "_");
			var propValueS = mostSimilarElement(propValue);
			if (propValueS === null || propValueS === undefined) {
				alert("Element \"" + value + "\" not found! Defaulting to sand.");
				propValue = "sand";
			} else {
				propValue = propValueS;
			};
		};

		//special check: color
		if(propProperty === "color") {
			//empty string
			if(propValue === "") {
				alert("No color was specified!");
				return false;
			};
			var splitValue = propValue.split(",");
			if(!propValue.startsWith("rgb(")) { //if not RGB
				if(propValue.startsWith("hsl(")) { //if HSL
					if(!(splitValue[1].endsWith('%')) || !(splitValue[2].endsWith('%)'))) { //if missing percent symbols
						alert(colorInvalidError);
						return false;
					};
				} else { //if not RGB and not HSL
					alert(colorInvalidError);
					return false;
				};
			};
			if(propValue.split(",").length !== 3) { //if too short or long
				alert(colorInvalidError);
				return false;
			}
			if(propValue.startsWith("rgb(")) { //if RGB
				var checkedColorObject = rgbStringToUnvalidatedObject(propValue); //RGB NaN checking
				if(isNaN(checkedColorObject.r) || isNaN(checkedColorObject.g) || isNaN(checkedColorObject.b)) {
					//console.log(checkedColorObject);
					alert("One or more color values are invalid!");
					return false;
				};
			} else if(propValue.startsWith("hsl(")) { //if HSL
				var checkedColorObject = hslStringToUnvalidatedObject(propValue); //HSL NaN checking
				if(isNaN(checkedColorObject.h) || isNaN(checkedColorObject.s) || isNaN(checkedColorObject.l)) {
					//console.log(checkedColorObject);
					alert("One or more color values are invalid!");
					return false;
				};
			} else { //if neither
				alert(colorInvalidError);
				return false;
			};
		};

		//special check: x
		if(propProperty === "x") {
			//empty string
			if(!propValue.isInteger) {
				alert("X values must be integers!");
			};
		};


		if(defaultNumberTypeValues.includes(propProperty.toLowerCase())) {
			propType = "number";
		} else if(defaultBooleanTypeValues.includes(propProperty.toLowerCase())) {
			propType = "boolean";
		} else if(defaultStringTypeValues.includes(propProperty.toLowerCase())) {
			propType = "string";
		} else if(defaultArrayTypeValues.includes(propProperty.toLowerCase())) {
			propType = "array";
		} else {
			propType = prompt("Enter the type of the value");
			if(stringSynonyms.includes(propType)) {
				propType = "string";
			} else if(numberSynonyms.includes(propType)) {
				propType = "number"; //Infinity (case-sensitively) is a *number*.
			} else if(booleanSynonyms.includes(propType)) {
				propType = "boolean";
			} else if(objectSynonyms.includes(propType)) {
				propType = "object"; //null (case-sensitively) is an *object*.
			} else if(arraySynonyms.includes(propType)) {
				propType = "array"; //offset coords use arrays a lot
			};
		};
		
		//Conversion
		if(propType === "number") {
			propValue = parseFloat(propValue);
			if(isNaN(propValue)) {
				alert("Value is not a number!");
				return false;
			};
		} else if(propType === "boolean") {
			if(synonymsOfTrue.includes(propValue.toLowerCase())) {
				propValue = true;
			} else if(synonymsOfFalse.includes(propValue.toLowerCase())) {
				propValue = false;
			} else {
				alert("Unrecognized boolean value: " + propValue + ".");
				return false;
			};
		} else if(propType === "object") {
			try {
				propValue = JSON.parse(propValue);
			} catch (error) {
				alert("JSON is invalid! Note that it requires quotes around keys as well as those curly {} parentheses.");
				return false;
			};
		} else if(propType === "array") {
			array = propValue.split(",");
			for(i = 0; i < array.length; i++) {
				if(array[i].startsWith("s")) { //String
					array[i] = array[i].substring(1);
				} else if(array[i].startsWith("n")) { //Number
					array[i] = array[i].substring(1);
					if(isNaN(parseFloat(array[i]))) {
						alert(array[i] + " is not a number!");
						return false;
					};
					array[i] = parseFloat(array[i]);
				} else if(array[i].startsWith("o")) { //Object
					array[i] = array[i].substring(1);
					try {
						array[i] = JSON.parse(array[i]);
					} catch (error) {
						alert(array[i] + " is not valid JSON!");
						return false;
					};
				} else if(array[i].startsWith("b")) { //Boolean
					array[i] = array[i].substring(1);
					if(synonymsOfTrue.includes(array[i].toLowerCase())) {
						array[i] = true;
					} else if(synonymsOfFalse.includes(array[i].toLowerCase())) {
						array[i] = false;
					} else {
						alert("Unrecognized boolean value: " + array[i] + ".");
						return false;
					};
				} else {
					alert(array[i] + ' must start with "s" for a string, "n" for a number, "o" for an object, or "b" for a boolean.');
					return false;
				};
			};
			propValue = array;
		} else if(propType !== "string") {
			alert("Unrecognized or unsupported type!");
			return false;
		};
		updatePropDescription();
		currentElement = "prop";
	};

	elements.prop = {
		color: "#ff7f00",
		tool: function(pixel) {
			if(propProperty === "element") {
				pixel[propProperty] = propValue;
				pixel.temp = (elements[propValue].temp || pixel.temp);
			} else {
				pixel[propProperty] = propValue;
			};
			pixelTempCheck(pixel);
		},
		category: "tools",
		desc: `Sets properties of pixels.<br/>Currently setting ${propProperty} to ${propValue} (${propType}).<br/><span onclick=propPrompt() style=\"color: #ff00ff;\";>Press [,] or click here</span> to open the property tool prompt.`,
	};

	function updatePropDescription() {
		elements.prop.desc = `Sets properties of pixels.<br/>Currently setting ${propProperty} to ${propValue} (${propType}).<br/><span onclick=propPrompt() style=\"color: #ff00ff;\";>Press [,] or click here</span> to open the property tool prompt.`;
	};

	function numberAdjusterPrompt() {
		numberAdjusterProperty = prompt("Enter the property you want to change");
		numberAdjusterValue = prompt("Enter the value you want to use");
		numberAdjusterMode = prompt("Enter \"set\" to set the property to the value,\nor \"add\" to add the value to the property.");

		//property check
		//console.log("Null property path");
		if(numberAdjusterProperty === "" || numberAdjusterProperty === null) {
			alert("No property was specified! Defaulting to temp.");
			numberAdjusterProperty = "temp";
			//console.log(numberAdjusterProperty);
		};
		//console.log("Property: " + numberAdjusterProperty);

		//value check
		if(isNaN(parseFloat(numberAdjusterValue))) {
			//console.log("Invalid value path");
			//console.log(numberAdjusterValue);
			//empty string
			if(numberAdjusterValue === "" || numberAdjusterValue === null) {
				//console.log("Null value path");
				alert("No value was specified! Defaulting to 1");
				numberAdjusterValue = 1;
				//console.log(numberAdjusterValue);
			} else {
				//console.log("NaN value path");
				alert("Invalid value! The value must be a number (defaulting to 1)");
				numberAdjusterValue = 1;
				//console.log(numberAdjusterValue);
			};
		};
		numberAdjusterValue = parseFloat(numberAdjusterValue);
		//console.log("Value: " + numberAdjusterValue);

		//mode check
		if(!["set","add"].includes(numberAdjusterMode.toLowerCase())) {
			//console.log("Invalid mode path");
			//console.log(numberAdjusterMode);
			//empty string
			if(numberAdjusterMode === "" || numberAdjusterMode === null) {
				//console.log("Null mode path");
				alert("No mode was specified! Defaulting to \"add\".");
				numberAdjusterMode = "add";
				//console.log(numberAdjusterMode);
			} else {
				//console.log("Unknown mode path");
				alert("Invalid mode! Only the values \"set\" or \"add\" are accepted (defaulting to \"add\").");			
				numberAdjusterMode = "add";
				//console.log(numberAdjusterMode);
			};
		};
		numberAdjusterMode = numberAdjusterMode.toLowerCase();
		//console.log("Mode: " + numberAdjusterMode);

		if(numberAdjusterMode === "set") {
			numberAdjusterVerb = "assigning";
		} else if(numberAdjusterMode === "add") {
			numberAdjusterVerb = "adding";
		} else {
			numberAdjusterVerb = "doing something probably invalid with";
		}
		updateNumberAdjusterDescription();
		currentElement = "number_adjuster";
	};

	elements.number_adjuster = {
		color: "#7fff00",
		tool: function(pixel) {
			if(numberAdjusterProperty !== "element") {			
				//console.log(numberAdjusterValue);
				if(numberAdjusterMode === "set") {
					pixel[numberAdjusterProperty] = numberAdjusterValue;
				} else if(numberAdjusterMode === "add") {
					if(typeof(pixel[numberAdjusterProperty]) === "undefined") {
						pixel[numberAdjusterProperty] = 0;
					};
					pixel[numberAdjusterProperty] += numberAdjusterValue;
				};
				pixelTempCheck(pixel);
			};
		},
		category: "tools",
		desc: `Sets or adds to numeric properties of pixels.<br/>Currently ${numberAdjusterVerb} ${numberAdjusterValue} to ${numberAdjusterProperty}.<br/><span onclick=numberAdjusterPrompt() style=\"color: #ff00ff;\";>Press [Shift+,] or click here</span> to open the adjuster tool prompt.`,
	};

	function updateNumberAdjusterDescription() {
		elements.number_adjuster.desc = `Sets or adds to numeric properties of pixels.<br/>Currently ${numberAdjusterVerb} ${numberAdjusterValue} to ${numberAdjusterProperty}.<br/><span onclick=numberAdjusterPrompt() style=\"color: #ff00ff;\";>Press [Shift+,] or click here</span> to open the adjuster tool prompt.`;
	};
} else {
	alert(`The ${variablesMod} mod is required and has been automatically inserted (reload for this to take effect).`)
	enabledMods.splice(enabledMods.indexOf(modName),0,variablesMod)
	localStorage.setItem("enabledMods", JSON.stringify(enabledMods));
};
