var form = document.querySelector('.form');
var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
	var rootUnit = document.querySelector('.rootUnit').value;
	var elementUnit = document.querySelector('.elementUnit').value;
	var last = (rootUnit / elementUnit).toFixed(4);

	document.querySelector('.show').textContent = last;
});