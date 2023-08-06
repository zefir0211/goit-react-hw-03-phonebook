import React from 'react';
import PropTypes from 'prop-types';
import { NameContacts, List, Elements, Button } from './contactList.styled';

const ContactList = ({ contacts, fillter, deleteContacts }) => {
return (
    <List>
        {fillter
        ? fillter.map(({ id, name, number }) => (
            <Elements key={id}>
                <NameContacts>
                {name}: {number}
                </NameContacts>
                <Button type="button" name={id} onClick={deleteContacts}>
                Delete
                </Button>
            </Elements>
        ))
        : contacts.map(({ id, name, number }) => (
            <Elements key={id}>
                <NameContacts>
                    {name}: {number}
                </NameContacts>
                <Button type="button" name={id} onClick={deleteContacts}>
                    Delete
                </Button>
            </Elements>
        ))}
    </List>
    );
};

ContactList.propTypes = {
contacts: PropTypes.arrayOf(
PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
})
),
fillter: PropTypes.bool.isRequired,
deleteContacts: PropTypes.func.isRequired,
};

export default ContactList;