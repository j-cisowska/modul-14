/*var GalleryItem = React.createClass ({
        render function() {
          return React.createElement('h2', {}, 'Pierwszy komponent');
        }
});*/

var GalleryItem = React.createClass ({
    propTypes: {
      image: React.PropTypes.object.isRequired,
    },

    render: function() {
      return (
          React.createElement('div', {},
            React.createElement('h2', {}, this.props.image.name),
          React.createElement('img', {src: this.props.image.src})
        )
      )
    },
});

var image = {
  name: 'cat',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});

/////////AKTUALNE ZADANIE!!!!

var Movie = React.createClass ({

      propTypes: {
        movie: React.PropTypes.object.isRequired,
      },


render: function() {
      return (
        React.createElement('li', {key: movie.id},
                React.createElement('h2', {}, this.props.movie.title),
                React.createElement('p', {}, this.props.movie.desc),
                React.createElement('p', {}, this.props.movie.release),
                React.createElement('p', {}, this.props.movie.type)
              );
      )
    }

});

var element = React.createElement(Movie, {key: movie_id}, {title: movie}


  var movie = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'Movie about wizard',
      release: 'release date - 2002',
      type: 'fantasy movie'
    },
    {
      id: 2,
      title: 'Lion King',
      desc: 'Movie about Simba, who became a king',
      release: 'release date - 1994',
      type: 'animated movie'
    }
  ];
ReactDOM.render(element, document.getElementById('app'));
