import { useDispatch } from 'react-redux';
import './ContactListItem.css';
import { deleteContact } from '../../redux/contacts/operations';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="contact-item" key={id}>
      <Stack direction="row" spacing={2}>
        <Avatar
          className="avatar"
          alt={name}
          src="../../images/neon_photo.png"
        />
      </Stack>
      <span className="item">{name} </span>
      <span className="item">{number} </span>
      <button
        className="deletebtn"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;
