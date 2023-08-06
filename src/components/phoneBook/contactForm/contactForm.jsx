import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Span, Input, Button, Form } from './contactForm.styled';

export default class ContactForm extends Component {
    state = {
    name: '',
    number: '',
};

onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
};

onSubmit = event => {
    event.preventDefault();
    const newContacts = {
        id: nanoid(5),
        name: this.state.name,
        number: this.state.number,
    };
    const isUnique = this.props.newContacts(newContacts);

    if (isUnique) {
        this.setState({
            name: '',
            number: '',
    });
    }
};

render() {
    const { name, number } = this.state;
    return (
    <Form onSubmit={this.onSubmit}>
        <label htmlFor="name">
        <Span>Name</Span>
        <Input
            onChange={this.onChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Rosie Simpson"
        />
        </label>

        <label htmlFor="number">
            <Span>Number</Span>
            <Input
            onChange={this.onChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="645-17-79"
        />
        </label>

        <Button type="submit">Add contact</Button>
    </Form>
    );
    }
}

ContactForm.propTypes = {
    newContacts: PropTypes.func.isRequired,
};