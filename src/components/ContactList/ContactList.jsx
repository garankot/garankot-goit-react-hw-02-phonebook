import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { ContList, ContListItem } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContList>
    {contacts.map(({ id, name, number }) => (
      <ContListItem key={id}>
        <ContactListItem name={name} number={number} />
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </ContListItem>
    ))}
  </ContList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
