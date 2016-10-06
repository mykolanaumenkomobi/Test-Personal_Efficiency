
var myTest = {};   //  Creating the one global Object.

	myTest.counter = 0;
	myTest.iteration = 0, 
	myTest.quest = [
		"Do you read the books?",
		"Do you study English?",
		"Do you do the morning exercises?",
		"Do you go to bed early?"
	    ];

function testRun() {
	var body = document.getElementsByTagName("body");     
	var div = document.getElementById("div");
		div.innerHTML = myTest.quest [ myTest.iteration ]; //Вывести вопрос iteration  
	var input = document.getElementById("input");
		document.body.removeChild(input);               //Удалить кнопку "Пройти тест"
    var buttonYes = document.createElement("input");    
		buttonYes.type = "button";
		buttonYes.value = "Yes";
		buttonYes.onclick = pushYes;
		document.body.appendChild(buttonYes);           //Вставить кнопку Да
	var buttonNo = document.createElement("input");        
		buttonNo.type = "button";
		buttonNo.value = "No";
		buttonNo.onclick = pushNo;
		document.body.appendChild(buttonNo);            //Вставить кнопку Нет 
};
		
function removeLastChild() {
    var body = document.getElementById("body");
    var buttonRej = body.lastChild;
	    if (buttonRej != null) {
	         body.removeChild(buttonRej);       // удаление выбранного элемета из DOM дерева.
	    };
};	

function pushYes () {
	myTest.counter += 1;    
    myTest.iteration += 1;
	if ( myTest.iteration < myTest.quest.length ) {     	  
	    var div=document.getElementById("div");
		    div.innerHTML = myTest.quest [myTest.iteration];           //Вывести вопрос iteration	
		    move (myTest.iteration);
	}
	else {
      displayResult ( myTest.counter );               //Вывести кнопку Повторить тест
	  move ( myTest.iteration );
	}
};	  

function pushNo () {
	myTest.iteration += 1;
	if ( myTest.iteration < myTest.quest.length ){                    //Вывести вопрос iteration
	   var div = document.getElementById("div");
		   div.innerHTML = myTest.quest[myTest.iteration ];
		   move (myTest.iteration);
	   }
	else {                                  //Вывести кнопку Повторить тест
	  displayResult ( myTest.counter );
	  move ( myTest.iteration );
    }   
};
	 
function displayResult() {
	if ( myTest.counter <= myTest.quest.length/3 )	{
		var div=document.getElementById("div");
	   		div.innerHTML = "Your result is : <strong>Bad</strong>";
	}
	else if ( myTest.counter < myTest.quest.length ) {
		var div = document.getElementById("div");
	   		div.innerHTML = "Your result is : <strong>Good</strong>";
	}
	else {
		var div = document.getElementById("div");
	   		div.innerHTML = "Your result is : <strong>Excelent</strong>";
	};
	removeLastChild();                                   //Удалить кнопки Нет   
    removeLastChild();                                   //Удалить кнопки Да   
	var buttonRestart = document.createElement("input"); //Вставить кнопку Повторить тест
	    buttonRestart.type = "button";
		buttonRestart.value = "Pass the test once again";
		buttonRestart.id = "input";
		buttonRestart.onclick = restartTest;
		document.body.appendChild(buttonRestart);	
};

function move () {                          //ProgressBar
    var stop = myTest.iteration *100/(myTest.quest.length);
	var elem = document.getElementById("Bar"); 
    var width = (myTest.iteration - 1) * 100 / (myTest.quest.length);
    if(myTest.iteration ==0){var sett = 0}
	  else {var sett = 12}
	var id = setInterval(frame, sett);
    function frame() {
       if (width >= stop) {
           clearInterval(id);
       } else {
           width ++; 
           elem.style.width = width + '%'; 
       }
    };
};

function restartTest(){
	myTest.counter = 0;
	myTest.iteration = 0;                                            //Удалить результат
	testRun();
	move(myTest.iteration)
};
