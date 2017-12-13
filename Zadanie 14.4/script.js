var Counter = React.createClass({
    getInitialState: function() {
        console.log('Początkowy stan naszego komponentu');
		return {
            counter: 0
        };
    },
	
	
	increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

	decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
	
	
	componentWillMount: function() {
        console.log('Wywołanie bezpośrednio przed wystąpieniem montowania');
},

		componentDidMount: function() {
        console.log('Cały komponent jest już wyrenderowany, można działać');
},

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
			React.createElement('button', {onClick: this.increment}, '+1'),
			React.createElement('button', {onClick: this.decrement}, '-1')
        );
    }
});




var element = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter)
);
			  


ReactDOM.render(element, document.getElementById('app'));