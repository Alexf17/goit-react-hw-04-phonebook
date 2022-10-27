import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Wrap,
  Form,
  InputWpap,
  Label,
  Input,
  Button,
} from './ContactForm.styled';

// export default function ContactForm() {
//   const [state, setState] = useState({name: '', number:''});
//   // const [number, setNumber] = useState('');

//   const handleChange = event => {
//   const { name, value } = event.currentTarget;
//     setState(prev => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//      const { name, number } = state;
//     this.props.onSubmit({name, number});
//     // reset();
//   };

//   // const reset = () => {
//   //   setName('');
//   //   setNumber('');
//   // };

//   return (
//     <Wrap>
//       <Form onSubmit={handleSubmit}>
//         <InputWpap>
//           <Label>Name</Label>
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={state.name}
//             onChange={handleChange}
//           />
//         </InputWpap>
//         <InputWpap>
//           <Label>Number</Label>
//           <Input
//             type="text"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={state.number}
//             onChange={handleChange}
//           />
//         </InputWpap>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     </Wrap>
//   );
// }

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

handleSubmit = event => {
  event.preventDefault();

  this.props.onSubmit(this.state);

  this.reset();
};

reset = () => {
  this.setState({ name: '', number: '' });
};

  render() {
    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit}>
          <InputWpap>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.number}
              onChange={this.handleChange}
            />
          </InputWpap>
          <Button type="submit">Add contact</Button>
        </Form>
      </Wrap>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
