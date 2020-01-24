var lamp = document.getElementById("lampImg");
var switchBtn = document.getElementById("switchbtn");
var brkBtn = document.getElementById("brkbtn");
var opt;

brkBtn.addEventListener('click', function(){
    opt="brk.png";
    lamp.src=opt;
});
switchBtn.addEventListener('click', function(){
    if(lamp.src.match("brk.png")){
        console.log("you can't");
    }else if(lamp.src.match("off.png")){
        opt="on.png";
    }else if(lamp.src.match("on.png")){
        opt="off.png";
    }
    
    lamp.src=opt;
});

