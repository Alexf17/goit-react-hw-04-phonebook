import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { getLocalStorage, setLocalStorage } from 'constans/localStorage';
import { Filter } from '../Filter/Filter';
import { phoneBook } from 'constans/contactsBase';
import { renderFilteredContact } from './helpers';
import { Wrap, TitleBook, ContactTitle, ContactWrap } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    getLocalStorage('contacts') ?? phoneBook
  );
  const [filter, setFilter] = useState('');

  const addToList = (name, number) => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };


  const filteredContacts = renderFilteredContact(contacts, filter)

  useEffect(() => {
    setLocalStorage('contacts', contacts);
  }, [contacts]);

  return (
    <>
      <Wrap>
        <TitleBook>Phonebook</TitleBook>
        <ContactForm onSubmit={addToList} />
        <ContactTitle>Contacts</ContactTitle>
        <ContactWrap>
          <Filter value={filter} onChange={changeFilter} />
          <ContactsList
            contacts={filteredContacts}
            onDelete={deleteContact}
          />
        </ContactWrap>
      </Wrap>
    </>
  );
};
