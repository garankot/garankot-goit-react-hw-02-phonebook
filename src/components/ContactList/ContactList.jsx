import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name + ':' + contact.number}
        {
          <button
            type="button"
            name="delte"
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
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
