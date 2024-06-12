//JavaScript 
function fadeIn(element, speed) {
    if (element.style.opacity != 1) {
        var speed = speed || 30;
        var num = 0;
        var st = setInterval(function () {
            num++;
            element.style.opacity = num / 25;
            if (num >= 25) { clearInterval(st); }
        }, speed);
    }
}

function fadeOut(element, speed) {
    if (element.style.opacity != 0) {
        var speed = speed || 30;
        var num = 25;
        var st = setInterval(function () {
            num--;
            element.style.opacity = num / 25;
            if (num <= 0) { clearInterval(st); }
        }, speed);
    }

}

function btnIn(s) {
    el = document.getElementById(s);
    fadeIn(el, 20);
}

function btnOut(s) {
    el = document.getElementById(s);
    fadeOut(el, 20);
}

var Sel = 1;

function select(t) {
    if (Sel == t)
        return;
    document.getElementById("btn_" + Sel).src = './img/未选中.png';
    document.getElementById("btn_" + t).src = './img/选中.png';
    btnOut("con" + Sel);
    btnIn("con" + t);
    Sel = t;
    // console.log(Sel);
}

var Seltv = 1;

function selecttv(t) {
    if (Seltv == t)
        return;
    document.getElementById("btntv_" + Seltv).src = './img/未选中.png';
    document.getElementById("btntv_" + t).src = './img/选中.png';
    btnOut("tv" + Seltv);
    btnIn("tv" + t);
    Seltv = t;
    // console.log(Sel);
}

var Selleaf = 1;

function selectleaf(t) {
    if (Selleaf == t)
        return;
    document.getElementById("btnleaf_" + Selleaf).src = './img/未选中.png';
    document.getElementById("btnleaf_" + t).src = './img/选中.png';
    btnOut("leaf" + Selleaf);
    btnIn("leaf" + t);
    Selleaf = t;
    // console.log(Sel);
}