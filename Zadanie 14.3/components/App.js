var contacts = [
  {
    id: 1,
    firstName: 'Dariusz',
    lastName: 'Kowalczyk',
    email: 'dariusz.kowalczyk@example.com',
  },
  {
    id: 2,
    firstName: 'Stanisław',
    lastName: 'Mazur',
    email: 'stanislaw.mazur@example.com',
  },
  {
    id: 3,
    firstName: 'Maria',
    lastName: 'Kamyk',
    email: 'maria.kamyk@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
});