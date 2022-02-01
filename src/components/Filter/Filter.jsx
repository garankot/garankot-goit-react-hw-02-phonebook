import PropTypes from 'prop-types';

import { FilterDiv, FilterInput } from './Filter.styled';

export default function Filter({ value, onChangeFilter }) {
  return (
    <FilterDiv>
      Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </FilterDiv>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
