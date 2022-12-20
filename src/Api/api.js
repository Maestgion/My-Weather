const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6015526513msha0fcb41a43683e7p1cc428jsn4a322481f64e',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));