var movies = [
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


var Movie = React.createClass({

  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
        React.createElement('li', {key: this.props.movie.id},
        React.createElement('h2', {}, this.props.movie.title),
        React.createElement('p', {}, this.props.movie.desc),
        React.createElement('p', {}, this.props.movie.release),
        React.createElement('p', {}, this.props.movie.type),
        React.createElement('img', {src: this.props.movie.picture.src})
      )
    );
  }
});


var MoviesList = React.createClass({
        propTypes: {
            movies: React.PropTypes.array.isRequired,
        },
        render: function() {
            return (
                React.createElement('div', {},
                    React.createElement('h1', {}, 'Lista filmów'),
                    React.createElement('ul', {}, moviesElements(this.props.movies))
                )
            )
        },
    });
	
	var moviesElements = function(movies) {
        return movies.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie});
        });
    };

var element = React.createElement(MoviesList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));
