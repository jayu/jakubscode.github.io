function LiveType(element,string,timeOut) {
    var el = element;
    var timeOut = timeOut;
    var str = string;
    var counter = 0;
    this.start = function() {
        var interval = window.setInterval(function() {
            el.innerHTML = str.substr(0,counter++) + "|";
            if (counter > string.length){
                window.clearInterval(interval);
                setCursor();
            } 
        },timeOut)
        var i = false;
        var setCursor = function() {
            var cursor = window.setInterval(function() {
                if (i) {
                    el.innerHTML += "|";
                    i = false;
                } else {
                    el.innerHTML = el.innerHTML.substr(0,el.innerHTML.length-1);
                    i = true;
                }
            },800)   
        }
        
    }  
}