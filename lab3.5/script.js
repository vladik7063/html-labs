function update(){
    var top = document.getElementById("pic").style.top;
    var num = Math.floor(Math.random() * 100);
    document.getElementById("pic").style.left = num+"%";
    document.getElementById("pic").style.top = num+"%";
    }
    setInterval(update, 2000); // Вызывать update() через каждые 2 сек