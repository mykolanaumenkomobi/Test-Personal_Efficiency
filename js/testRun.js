
function testRun() {

    var body = document.getElementsByTagName("body");   

	var div = document.getElementById("div");
	    div.className = 'normal';
		div.innerHTML = myTest.quest [ myTest.iteration ]; //Вывести вопрос из массива со значением индекса = iteration  

	var input = document.getElementById("input");
		document.body.removeChild(input);               //Удалить кнопку "Пройти тест"

    var buttonYes = document.createElement("input");    
		buttonYes.type = "button";
		buttonYes.value = "Yes";
		buttonYes.onclick = pushYes; 
		buttonYes.style = "border-top-left-radius: 7px; border-bottom-left-radius: 7px;"
		document.body.appendChild(buttonYes);           //Вставить кнопку Да

	var buttonNo = document.createElement("input");        
		buttonNo.type = "button";
		buttonNo.value = "No";
		buttonNo.onclick = pushNo;
		buttonNo.style = "border-top-right-radius: 7px; border-bottom-right-radius: 7px;"
		document.body.appendChild(buttonNo);            //Вставить кнопку Нет 
		
    move ();
}
