import { Navigate, Route, Routes } from 'react-router-dom';
// import { Container, Title, Section } from './App.styled';
// import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import Layout from '../Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ContactList />} />
        {/* <Route path="ContactForm" element={<ContactForm />} /> */}

        {/* <Route path="*" element={<div> Nothing found </div>} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
