import React from 'react';
import './ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selector';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = e => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    const isExist = Array.isArray(contacts)
      ? contacts.find(
          contact =>
            contact.name.toLowerCase() === formData.name.toLowerCase().trim()
        )
      : null;

    if (isExist) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    dispatch(addContact(formData));
    e.target.reset();
  };

  return (
    <div className="phonebook-form">
      <h1 className="phonebook-title">Phonebook</h1>
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="form-group">
          <label className="form-title-cont" htmlFor="name">
            Name:
          </label>
          <input
            className="input-contact"
            type="text"
            name="name"
            required
            placeholder="Enter by name"
          />
        </div>
        <div className="form-group">
          <label className="form-title-cont" htmlFor="number">
            Number:
          </label>
          <input
            type="text"
            name="number"
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            className="input-contact"
            placeholder="Enter by number"
          />
        </div>
        <button className="namebtn" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
