var canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="#2E5090";
var width=10;
var pox; 
var poy;
var Cx;
var Cy;
var s_width=screen.width;
var n_w=screen.width-70;
var n_h=screen.height-100;

if (s_width<992){
    document.getElementById("myCanvas").height=n_h;
    document.getElementById("myCanvas").width=n_w;
};

canvas.addEventListener("touchstart",ts);

function ts(e) {
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;

    pox=e.touches[0].clientX-canvas.offsetLeft;
    poy=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",tm);

function tm(e) {
    Cx=e.touches[0].clientX-canvas.offsetLeft;
    Cy=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(pox,poy);
    ctx.lineTo(Cx,Cy);
    ctx.stroke();

    pox=Cx;
    poy=Cy;
}

function ca() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}