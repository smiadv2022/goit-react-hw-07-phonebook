import axios from 'axios';

axios.defaults.baseURL = 'https://64a91b1e8b9afaf4844a4038.mockapi.io/Api';

export const fetchContact = async () => {
  try {
    const response = await axios.get('/phonebook').then();

    const contactsInitialState = response.data;

    return contactsInitialState;
  } catch (error) {
    return error.message;
  }
};

export const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
