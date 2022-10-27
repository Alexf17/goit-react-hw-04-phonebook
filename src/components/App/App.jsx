import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from '../ContactForm/ContactForm';
import {ContactsList}  from "../ContactList/ContactList";
import  {Filter}  from "../Filter/Filter";
import { Wrap, TitleBook, ContactTitle, ContactWrap } from "./App.styled";



export default class App extends Component { 
  state = {
    contacts: [],
    filter: '',
  };

addToList = contacts => {
const { name, number } = contacts;

for (const contact of this.state.contacts) {
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

this.setState(prevState => ({
  contacts: [contact, ...prevState.contacts],
}));
  };

deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

changeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

renderFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalizedValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

componentDidMount() {
  const contacts = localStorage.getItem('contacts')
  const parsContacts = JSON.parse(contacts)

  if (parsContacts) {
    this.setState({contacts: parsContacts})
  }
  

}

componentDidUpdate(prevProps, prevState) {
  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}


  render() {
    const filteredContacts = this.renderFilteredContact();
    const { filter } = this.state;
    return (
  <>
    <Wrap>
        <TitleBook>
          Phonebook
        </TitleBook>
        <ContactForm onSubmit={this.addToList} />
        <ContactTitle>Contacts</ContactTitle>
        <ContactWrap>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        </ContactWrap>
    </Wrap>
</>
    )
  }
}