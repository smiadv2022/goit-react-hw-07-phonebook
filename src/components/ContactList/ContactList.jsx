import { Filter } from 'components/Filter/Filter.jsx';
import { List, Item, Button } from './ContactList.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/Contacts/ContactSlice.js';
import { Section, Title } from 'components/App/App.styled.js';
import { getContactSelector, getFilterSelector } from 'store/Selector.js';

export const ContactList = () => {
  const filter = useSelector(getFilterSelector);
  const contacts = useSelector(getContactSelector);

  const dispatch = useDispatch();

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
        <Title>Phonebook</Title>
        <Filter></Filter>
      </Section>
      <Section>
        <List>
          <Title>ContactList</Title>
          {filterContact().map(contact => (
            <Item key={contact.id}>
              {contact.name}: {contact.number}
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
