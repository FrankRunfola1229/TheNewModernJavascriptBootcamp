// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

fetch('https://swapi.co/api/planets/')
  .then(response => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)

    response.json().then(data => {
      for (let planet of data.results) {
        const h1 = document.querySelector('table')
        h1.innerHTML += `<tr><td>${planet.name}</td></tr>`
      }
    })
  })
  .then(
    setTimeout(() => {
      const h1 = document.createElement('h1')
      h1.innerText = 'world'
      const elem = document.body.appendChild(h1)
    }, 3000)
  )
  .catch(err => {
    console.log('SOMETHING WENT WRONG WITH FETCH!')
    console.log(err)
  })

const h1 = document.createElement('h1')
h1.innerText = 'hello'
const elem = document.body.appendChild(h1)
