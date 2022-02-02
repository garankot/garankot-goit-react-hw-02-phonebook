import { NameNum } from './ContListItem.styled';

const ContactListItem = ({ name, number }) => {
  return (
    <>
      <NameNum>
        {name}: {number}
      </NameNum>
    </>
  );
};

export default ContactListItem;
