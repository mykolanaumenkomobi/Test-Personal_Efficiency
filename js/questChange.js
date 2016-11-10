function questChange () {

	myTest.iteration += 1;

	if ( myTest.iteration < myTest.quest.length ){              //Вывести вопрос iteration
	   var div = document.getElementById("div");
		   div.innerHTML = myTest.quest[myTest.iteration ];
	   }
	else {                                                      //Вывести кнопку Повторить тест
	  displayResult ();
    }; 
    
    move ();
}