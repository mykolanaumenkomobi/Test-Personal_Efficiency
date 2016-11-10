//ProgressBar

function move () {       

    var stop = myTest.iteration *100/(myTest.quest.length),
	      elem = document.getElementById("Bar"),
        width = (myTest.iteration - 1) * 100 / (myTest.quest.length);

    if (myTest.iteration ==0) {
        var sett = 0;
    } else { 
    	  var sett = 12; 
    };

	  var id = setInterval ( frame, sett );

    function frame() {
    	
       if (width >= stop) {
           clearInterval(id);
       } else {
           width ++; 
           elem.style.width = width + '%'; 
       }
    };

}
