document.onmousemove = mouseM;
document.onkeypress = keyCl;

function mouseMove(el) {
el.innerHTML = "Координаты: " + event.clientX + ":" + event.clientY;
}

function mouseM(el) {
document.getElementById('key2').value = "Координаты: " + event.clientX + ":" + event.clientY;
}

function mouseMo(el) {
document.getElementById('key3').value = "Координаты: " + event.clientX + ":" + event.clientY;
}

function keyCl(el) {
document.getElementById('key').value = "Код: " + event.code;
}
//динамически изменяет координаты курсора