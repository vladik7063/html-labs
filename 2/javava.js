
function getPosition(obj, event) {
	const div = document.querySelector('.mouse'); 
	const borders = obj.getBoundingClientRect();
	const x = event.clientX - borders.left;
	const y = event.clientY - borders.top;
	div.innerHTML ="x: " + x + " y: " + y;
}

const html = document.querySelector('html');
html.addEventListener('mousemove', (event) => {
	getPosition(html, event);
});

function getKey(event) {
	const div = document.querySelector('.keys');
	div.innerHTML = event.key;
}

document.addEventListener('keydown', (event) => {
	getKey(event);
});