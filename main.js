const div = document.getElementById('facts');
const other = document.getElementById('button');
const p = document.createElement('p');

window.onload = createFacts();

async function createFacts(){
	const resp = await fetch('https://api.chucknorris.io/jokes/random');
	data = await resp.json();
	div.appendChild(p);
	p.id = 'text'
	p.innerHTML = data.value;
}

async function newFact(){
	const resp = await fetch('https://api.chucknorris.io/jokes/random');
	data = await resp.json();
	const text = document.getElementById('text');
	text.innerHTML = data.value;	
}

other.addEventListener('click', newFact)



