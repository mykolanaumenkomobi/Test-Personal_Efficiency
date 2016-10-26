//  Creating the One global Object.

var myTest = {   
	counter: 0,
	iteration: 0, 
	quest: [
		"Do you read the books?",
		"Do you study English?",
		"Do you do the morning exercises?",
		"Do you go to bed early?"
	    ]
};

function testRun() {
    var body = document.getElementsByTagName("body");     
    console.log(body);
	var div = document.getElementById("div");
	    div.className = 'normal';
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
	    var div=document.getElementById("div");                 //Вывести вопрос iteration			    
	}
	else {
      displayResult (myTest.quest, myTest.counter);             //Вывести кнопку Повторить тест
	};
	move (myTest.quest.length, myTest.iteration);
};	 

function pushNo () {
	myTest.iteration += 1;
	if ( myTest.iteration < myTest.quest.length ){              //Вывести вопрос iteration
	   var div = document.getElementById("div");
		   div.innerHTML = myTest.quest[myTest.iteration ];
	   }
	else {                                                      //Вывести кнопку Повторить тест
	  displayResult (myTest.quest, myTest.counter );
    }; 
    move (myTest.quest.length, myTest.iteration);
};

function restartTest(){
	myTest.counter = 0;
	myTest.iteration = 0;                                            //Удалить результат
	testRun();
	move(myTest.quest.length, myTest.iteration)
};






