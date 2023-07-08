import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Form, InputContact, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/Contacts/ContactSlice';
import { Section } from 'components/App/App.styled';
import { useNavigate } from 'react-router-dom';
import { getContactSelector } from 'store/Selector';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContactSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));

    setName('');
    setNumber('');
    navigate('/', { replace: true });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <InputContact
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
          value={name}
          onChange={handleChange}
        />
        <Label htmlFor="number">Number</Label>
        <InputContact
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
          value={number}
          onChange={handleChange}
        />
        {/* <Link to="/"> */}
        <Button type="submit">Add contact</Button>
        {/* </Link> */}
      </Form>
    </Section>
  );
};
