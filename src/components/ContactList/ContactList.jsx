import { Filter } from 'components/Filter/Filter.jsx';
import { ImUserPlus } from 'react-icons/im';
import {
  List,
  Item,
  Button,
  ModalBtn,
  SectionBtn,
} from './ContactList.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { Section, Title } from 'components/App/App.styled.js';
import {
  getContactSelector,
  getFilterSelector,
  getModalSelector,
} from 'store/Selector.js';
import { deleteContact, fetchContacts } from 'store/Operations.js';
import { useEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
// import { modalOpen } from 'store/Modal/ModalSlice.js';
import { Loader } from 'components/Loader/Loader.jsx';
import { modalOpen } from 'store/Modal/modalsSlice.js';

export const ContactList = () => {
  const filter = useSelector(getFilterSelector);
  const isOpenModal = useSelector(getModalSelector);
  const isLoading = useSelector(state => state.contacts.isLoading);
  // console.log(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContactSelector);

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Section>
        <List>
          {/* <Title>Phonebook</Title> */}
          <SectionBtn>
            Add contact:
            <ModalBtn
              type="submit"
              aria-label="add contact"
              onClick={() => dispatch(modalOpen())}
            >
              <ImUserPlus />
            </ModalBtn>
          </SectionBtn>
          {isLoading && <Loader />}
          {isOpenModal && <ContactForm />}
          <Filter></Filter>
        </List>
      </Section>
      <Section>
        <List>
          <Title>ContactList</Title>

          {filterContact().map(contact => (
            <Item key={contact.id}>
              {contact.name}: {contact.phone}
              <Button onClick={() => onDeleteContact(contact.id)}>
                Delete
              </Button>
            </Item>
          ))}
        </List>
      </Section>
    </>
  );
};
