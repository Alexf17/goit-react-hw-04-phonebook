import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrap,
  Form,
  InputWpap,
  Label,
  Input,
  Button,
} from './ContactForm.styled';

export default function ContactForm({onSubmit}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {

  const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value)
    }
    if (name === 'number') {
      setNumber(value)
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <InputWpap>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </InputWpap>
        <InputWpap>
          <Label>Number</Label>
          <Input
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </InputWpap>
        <Button type="submit">Add contact</Button>
      </Form>
    </Wrap>
  );
}


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
