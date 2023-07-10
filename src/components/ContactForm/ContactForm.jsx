import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import {
  Form,
  InputContact,
  Label,
  Button,
  Overlay,
  WrapperForm,
  ButtonClose,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from 'components/App/App.styled';
// import { useNavigate } from 'react-router-dom';
import { getContactSelector } from 'store/Selector';
// import { addContact } from 'store/operations';
// import { modalClose } from '.';
import { Title } from 'components/ContactList/ContactList.styled';
import { modalClose } from 'store/Modal/modalsSlice';
import { addContact } from 'store/Operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handlerEscapeClick = e => {
    // console.log('e.code', e.code);
    if (e.code === 'Escape') {
      dispatch(modalClose());
    }
    return window.removeEventListener('keydown', handlerEscapeClick);
  };
  window.addEventListener('keydown', handlerEscapeClick);

  const contacts = useSelector(getContactSelector);

  const handlerBackdropClick = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      dispatch(modalClose());
    }
  };
  const handlerClose = e => {
    dispatch(modalClose());
  };
  const handleSubmit = e => {
    e.preventDefault();
    // console.log('name', name);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (name === '') {
      alert(`fields for input is empty`);
      return;
    }
    const phone = number;
    dispatch(addContact({ name, phone }));
    dispatch(modalClose());
    setName('');
    setNumber('');
    // navigate('/', { replace: true });
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
    <Overlay onClick={handlerBackdropClick}>
      <Section>
        <WrapperForm>
          <ButtonClose onClick={handlerClose}>
            <ImCross />
          </ButtonClose>
          <Title>Add contact</Title>
        </WrapperForm>
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
    </Overlay>
  );
};
