import React, { Component } from 'react';
import Filter from './phoneBook/filter/filter';
import ContactForm from './phoneBook/contactForm/contactForm';
import ContactList from './phoneBook/contactList/contactList';
import { Section, Container, Div, H1, DivList, H2 } from './App.styled';

const KEY = 'contacts-list';

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  componentDidMount() {
    const local = localStorage.getItem(KEY);
    if (local !== null) {
      this.setState({ contacts: JSON.parse(local) });
    }
  }

  componentDidUpdate(_, prevState) {
    const nextState = this.state.contacts;
    if (prevState.Component !== nextState) {
      localStorage.setItem(KEY, JSON.stringify(nextState));
    }
  }

  newContacts = newObj => {
    if (this.state.contacts.some(x => x.name === newObj.name)) {
      alert(`${newObj.name} is already is contacts`);
      return false;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newObj],
    }));
    return true;
  };

  onCahangeFilter = event => {
    this.setState({
      filter: event.target.value.toLowerCase(),
    });
  };

  filter = () => {
    if (this.state.filter !== '') {
      return this.state.contacts.filter(x =>
        x.name.toLowerCase().includes(this.state.filter)
      );
    }

    return false;
  };

  deleteContacts = event => {
    const index = this.state.contacts.findIndex(x => x.id === event.target.name);

    this.setState(this.state.contacts.splice(index, 1));
  };

  render() {
    const { contacts } = this.state;
    const fillter = this.filter();
    return (
      <Section>
        <Container>
          <Div>
            <H1>Phonebook</H1>
            <ContactForm newContacts={this.newContacts} />
          </Div>

          <DivList>
            <H2>Contacts</H2>
            <Filter onChange={this.onCahangeFilter} />
            <ContactList
              fillter={fillter}
              contacts={contacts}
              deleteContacts={this.deleteContacts}
            />
          </DivList>
        </Container>
      </Section>
    );
  }
}