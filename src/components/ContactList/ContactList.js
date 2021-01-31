import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { List } from './ContactListStyles';
import { deleteContact } from '../../redux/phonebook/phonebook-action';
import { filteredContacts } from '../../redux/phonebook/phonebook-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(filteredContacts);

  return items && items.length > 0 ? (
    <List>
      {items.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </List>
  ) : null;
};

export default ContactList;
