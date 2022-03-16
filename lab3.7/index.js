const text = document.getElementById('text');
text.style.fontSize = document.cookie.split('=')[1] || '45px';

const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

increaseButton.addEventListener('click',()=>{
    const newFontSize = `${parseInt(text.style.fontSize) + 5}px`
    text.style.fontSize = newFontSize;
    document.cookie=`fontSize=${newFontSize}; SameSite=strict`
})

decreaseButton.addEventListener('click',()=>{
    const newFontSize = `${parseInt(text.style.fontSize) - 5}px`
    text.style.fontSize = newFontSize;
    document.cookie=`fontSize=${newFontSize}; SameSite=strict`
})
