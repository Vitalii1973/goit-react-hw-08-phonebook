import React from 'react';
import './ContactList.css';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactListItem/ContactListItem';
import { selectContacts, selectFilter } from '../../redux/contacts/selector';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div className="contactlist-list">
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem key={id} name={name} id={id} number={number} />
      ))}
    </div>
  );
};

export default ContactList;
