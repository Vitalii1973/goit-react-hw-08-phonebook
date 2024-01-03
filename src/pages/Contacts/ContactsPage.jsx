import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selector';
import {} from './ContactsPage.css';
import { Loader } from 'components/Loader/Loader';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="contact-main">
      <ContactForm />
      <h2 className="contact-contacts">Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};

export default Contacts;
