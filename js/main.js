
var myTest = {   //  Creating the One global Object.

	counter: 0,
	iteration: 0, 
	quest: [
		"Do you read the books?",
		"Do you study English?",
		"Do you do the morning exercises?",
		"Do you go to bed early?"
	    ]
};

testRun();

function pushYes () {
	myTest.counter += 1;    
    questChange ();
};	 

function pushNo () {
	questChange ();
};


function restartTest(){
	myTest.counter = 0;
	myTest.iteration = 0;                                            //Удалить результат
	testRun();
	
};
