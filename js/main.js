
var Module = {  
	counter: 0,
	quest: [
		"Do you read the books?",
		"Do you study English?",
		"Do you do the morning exercises?",
		"Do you go to bed early?"
	    ]

};


function $ (ID) {
	return document.getElementById(ID);
};

Module.text = $("message");
Module.len = Module.quest.length;
initDomElement ();
move(Module.len);

function initDomElement () {

    Module.button = $("buttonInit");
	Module.buttonYes = $("Yes");
	Module.buttonNo = $("No");

	if (Module.button) {
		Module.step = 0;
		Module.button.onclick = goTest; 
	    //console.log("Init Button");
	} else if (Module.buttonNo) {
		Module.buttonNo.onclick = pressNo;
		//console.log("Init Button No");
	} else if (Module.buttonYes) {
		Module.buttonYes.onclick = pressYes; 
		//console.log("Init Button Yes");
	};
};

Module.container = $("container");
console.log(Module.div);


function goTest () {

	console.log("counter "+ Module.counter);
    console.log ("step "+ Module.step);
	if (Module.step == 0) {       
		//console.log("Module.step == 0");                 
		container.removeChild(Module.button);
	    buttonCreation ("Yes");
	    buttonCreation ("No");
	    move(0);

	};

	if (Module.step < Module.len) {                             //Проверяем не закончились ли вопросы в массиве
	    //console.log("Module.step < Module.quest.length"); 
		Module.text.innerHTML = Module.quest[Module.step];      //Вставляем текст вопроса в разметку
	    Module.step ++;
	} else {
		  Module.step ++;
          //console.log(Module.counter);
		  container.removeChild(Module.buttonNo);
		  container.removeChild(Module.buttonYes);
		  displayResult (Module.len);
		  Module.counter = 0;
	      setTimeout ( createRestartButton , 1300);
	};

	move(Module.step-1, Module.len);
};

function buttonCreation (name, id) {
	//console.log(id);
	var button = document.createElement("input");
	button.value = name;
	button.type = "button";
	(id == undefined) 
	  ? (id = name, 
	     button.className = "control button")
	    :button.className = "big button";
	button.id = id;
	container.appendChild(button);

	initDomElement ();
	id = undefined;
};


function pressYes () {
	Module.counter ++;
	goTest ();
	//console.log("Press YES");
};


function pressNo () {
	goTest ();
	//console.log("Press NO");
};


function displayResult (len) {
	//console.log(Module.counter);
	var text = $("message");
	( Module.counter <= len/3 )	? text.innerHTML = "Your result is : <strong>Bad</strong>!" : 
	( Module.counter < len ) ?text.innerHTML = "Your result is : <strong>Good</strong>!"
	:text.innerHTML = "Your result is : <strong>Excelent</strong>!";
	
	
};

function createRestartButton () {
		buttonCreation ("Once again", "buttonInit")
};
