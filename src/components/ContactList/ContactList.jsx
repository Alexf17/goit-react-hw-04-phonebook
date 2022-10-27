import PropTypes from 'prop-types';

import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

import { Ul } from './ContactList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDelete={onDelete}
        />
      ))}
    </Ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};