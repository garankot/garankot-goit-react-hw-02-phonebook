import PropTypes from 'prop-types';
import { ContList, ContListItem, NameNum } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContList>
    {contacts.map(({ id, name, number }) => (
      <ContListItem key={id}>
        <NameNum>
          {name}: {number}
        </NameNum>

        {
          <button
            type="button"
            name="delte"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        }
      </ContListItem>
    ))}
  </ContList>
);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
