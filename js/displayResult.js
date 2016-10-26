function displayResult() {
	if ( myTest.counter <= myTest.quest.length/3 )	{
		var div=document.getElementById("div");
	   		div.innerHTML = "Your result is : <strong>Bad</strong>";
	}
	else if ( myTest.counter < myTest.quest.length ) {
		var div = document.getElementById("div");
		    div.className = "big";
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
}
