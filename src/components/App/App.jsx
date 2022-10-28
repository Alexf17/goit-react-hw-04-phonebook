import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from '../ContactForm/ContactForm';
import {ContactsList}  from "../ContactList/ContactList";
import  {Filter}  from "../Filter/Filter";
import { Wrap, TitleBook, ContactTitle, ContactWrap } from "./App.styled";



export  const App = () =>  { 

  const [contacts, setContacts] = useState(() =>(JSON.parse(localStorage.getItem('contacts'))) ??[
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])
  const [filter, setFilter] = useState('')


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
    setContacts(prevState => (
     prevState.filter(contact => contact.id !== contactId)
    ));
  };

const changeFilter = event => {
    const {value} = event.currentTarget;
    setFilter(value)
  };

const renderFilteredContact = () => {
    const normalizedValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])


const filteredContacts = renderFilteredContact();
    
    return (
  <>
    <Wrap>
        <TitleBook>
          Phonebook
        </TitleBook>
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
    )
  }
