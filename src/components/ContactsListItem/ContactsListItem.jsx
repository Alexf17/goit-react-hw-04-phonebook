import PropTypes from 'prop-types';

import { Item, Name, Number, Button } from './ContactsListItem.styled';

export const ContactsListItem = ({ name, number, id, onDelete }) => {
  return (
    <Item>
      <Name>
        {name}:
      </Name>
      <Number>{number}</Number>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};