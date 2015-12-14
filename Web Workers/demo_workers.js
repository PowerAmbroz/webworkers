var l = 0;

function timedCount(l) {
    l = l + 1;
    postMessage(l);
    setTimeout("timedCount()",500);
}

timedCount(l); 