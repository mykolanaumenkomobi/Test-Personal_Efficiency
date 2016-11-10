function displayResult() {

	var div = document.getElementById("div");
		div.className = "big";

	if ( myTest.counter <= myTest.quest.length/3 )	{
	   		div.innerHTML = "Your result is : <strong>Bad</strong>";
	}
	else if ( myTest.counter < myTest.quest.length ) {
	   		div.innerHTML = "Your result is : <strong>Good</strong>";
	}
	else {
	   		div.innerHTML = "Your result is : <strong>Excelent</strong>";
	};

	removeLastChild();                                   //Удалить кнопки Нет  из DOM 
        removeLastChild();                                   //Удалить кнопки Да   из DOM
    
	var buttonRestart = document.createElement("input"); //Вставить кнопку Повторить тест
	    buttonRestart.type = "button";
		buttonRestart.value = "Once again";
		buttonRestart.id = "input";
		buttonRestart.onclick = restartTest;
		document.body.appendChild(buttonRestart);	
}
