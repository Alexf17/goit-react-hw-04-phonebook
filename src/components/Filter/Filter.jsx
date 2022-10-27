import PropTypes from 'prop-types';

import { Input, Wrap } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <Wrap>
      <Input
        onChange={onChange}
        name="filter"
        type="filter"
        value={value}
      ></Input>
    </Wrap>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};