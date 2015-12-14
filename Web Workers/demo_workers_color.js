var i = 0;

function timedCount(i) {
    i = i + 1;
 	if (i%2 == 0){
		var x=  "#ff0000";
		postMessage(x);
	}
	else{
		var x = "blue";
		postMessage(x);
	}
    setTimeout("timedCount("+i+")",500);
}

timedCount(i); 


