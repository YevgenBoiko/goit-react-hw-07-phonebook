import { Container, Section, Title } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import GlobalStyle from './GlobalStyle';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <Title>Phonebook</Title>
        <Form />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />

        <Contacts />
        {isLoading && !error && <b>Request in progress...</b>}
      </Section>
      <GlobalStyle />
    </Container>
  );
};
