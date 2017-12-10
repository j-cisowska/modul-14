//Filmy
var movie = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Movie about wizard',
    release: 'release date - 2002',
    type: 'fantasy movie',
	picture: {
		src: 'https://lh3.googleusercontent.com/cAgJGmSF4ndck5R_kWAeEvHyeFZeq33krH_9nvC_4mKNSsPty1bUodFBCa3bgPAeSQnlZDLY7Al3bHAqjDYEVA=s1125'
	}
  },
  {
    id: 2,
    title: 'Lion King',
    desc: 'Movie about Simba, who became a king',
    release: 'release date - 1994',
    type: 'animated movie',
	picture: {
		src: 'http://is1.mzstatic.com/image/thumb/Video128/v4/5a/0f/f1/5a0ff17c-88c6-3e89-6cd4-41f7df410b05/source/1200x630bb.jpg'
	}
  }
];

//Tytuł + opis
var moviesElements = movie.map(function(movie) {
    return React.createElement('li', {key: movie.id},
            React.createElement('h2', {}, movie.title),
            React.createElement('p', {}, movie.desc),
            React.createElement('p', {}, movie.release),
            React.createElement('p', {}, movie.type),
			React.createElement('img', {src: movie.picture.src})
          );
});

//Ogólna lista
var element = React.createElement('div', {},
              React.createElement('h1', {}, 'Lista filmów'),
              React.createElement('ul', {}, moviesElements)     
            );



ReactDOM.render(element, document.getElementById('app'));
