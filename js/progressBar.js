//ProgressBar

function move (iteration, lengthArr) {       
    

    var stop = iteration * 100 / lengthArr,
        elem = document.getElementById("Bar"),
        width = (iteration - 1) * 100 / lengthArr;

    if (lengthArr != undefined) {

        if (iteration == 0) {
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
    } else { 
      console.log(width);
           var id = setInterval ( back, 120);
           function back () {
               if (width > stop) {
                 width --; 
                   elem.style.width = width + '%'; 

               } else {
                  clearInterval(id); 
               }
           };
     
    }
    
}
