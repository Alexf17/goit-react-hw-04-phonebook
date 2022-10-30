 export const renderFilteredContact = (contacts, filter) => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
     
  };