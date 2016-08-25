var counter=0, i=0, quest=[
	"Do you read the books?",
	"Do you study English?",
	"Do you do the morning exercises?",
	"Do you go to bed early?"
    ];
var questionsNum = quest.length;

function testRun() {
	var body=document.getElementById("body");     
	var div=document.getElementById("div");
	div.innerHTML = quest[i];                       //Вывести вопрос i  
	var input=document.getElementById("input");
	document.body.removeChild(input);               //Удалить кнопку "Пройти тест"
    var buttonYes=document.createElement("input");  //Вставить кнопку Да
	buttonYes.type = "button";
	buttonYes.value = "Yes";
	buttonYes.onclick = pushYes;
	document.body.appendChild(buttonYes);
	var buttonNo=document.createElement("input");   //Вставить кнопку Нет    
	buttonNo.type = "button";
	buttonNo.value = "No";
	buttonNo.onclick = pushNo;
	document.body.appendChild(buttonNo);
};
		
function restartTest(){
	counter=0;
	i=0;                                            //Удалить результат
	testRun();
	move(i)
};	 

function displayResult(counter) {
	if ( counter <= questionsNum/3 )	{
		var div=document.getElementById("div");
	   	div.innerHTML = "Your result is : <strong>Bad</strong>";
	}
	else if ( counter < questionsNum ) {
		var div=document.getElementById("div");
	   	div.innerHTML = "Your result is : <strong>Good</strong>";
	}
	else {
		var div=document.getElementById("div");
	   	div.innerHTML = "Your result is : <strong>Excelent</strong>";
	};
	removeLastChild();                                 //Удалить кнопки Нет   
    removeLastChild();                                 //Удалить кнопки Да   
	var buttonRestart=document.createElement("input"); //Вставить кнопку Повторить тест
    buttonRestart.type = "button";
	buttonRestart.value = "Pass the test once again";
	buttonRestart.style="width: 160px";
	buttonRestart.id = "input";
	buttonRestart.onclick = restartTest;
	document.body.appendChild(buttonRestart);	
};

function removeLastChild() {
    var body = document.getElementById("body");
    var buttonRej = body.lastChild;
    if (buttonRej != null) {
         body.removeChild(buttonRej);       // удаление выбранного элемета из DOM дерева.
    };
};	

function pushYes() {
	counter=counter+1;    
    i=i+1;
	if (i<questionsNum) {     	  
	    var div=document.getElementById("div");
	    div.innerHTML = quest[i];           //Вывести вопрос i	
	    move(i)
	}
	else {
      displayResult(counter);               //Вывести кнопку Повторить тест
	  move(i);
	}
};	  

function pushNo() {
	i=i+1;
	if(i<questionsNum){                     //Вывести вопрос i
	   var div=document.getElementById("div");
	   div.innerHTML = quest[i];
	   move(i);
	   }
	else {                                  //Вывести кнопку Повторить тест
	  displayResult(counter);
	  move(i);
    }    
};

function move(i) {                          //ProgressBar
    var stop=i*100/(questionsNum);
	var elem = document.getElementById("Bar"); 
    var width = (i-1)*100/(questionsNum);
    if(i==0){var sett=0}
	  else {var sett=12}
	var id = setInterval(frame, sett);
    function frame() {
       if (width >= stop) {
           clearInterval(id);
       } else {
           width++; 
           elem.style.width = width + '%'; 
       }
    };
};
