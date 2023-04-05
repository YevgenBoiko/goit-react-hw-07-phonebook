import { List, Item, TextName, Button } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contacts = () => {
  const contactList = useSelector(state => state.contacts.items);
  const contactFilter = useSelector(state => state.filter.filter);

  const filteredContacts = contactFilter
    ? contactList.filter(contact =>
        contact.name.toLowerCase().includes(contactFilter.toLowerCase())
      )
    : contactList;
  const dispatch = useDispatch();
  return (
    <>
      {filteredContacts ? (
        <List>
          {filteredContacts.map(
            contact =>
              contact.id && (
                <Item key={contact.id}>
                  <TextName>{contact.name}: </TextName>
                  <p>{contact.number}</p>
                  <Button
                    type="button"
                    onClick={() => dispatch(deleteContact(contact.id))}
                  >
                    Delete
                  </Button>
                </Item>
              )
          )}
        </List>
      ) : (
        ''
      )}
    </>
  );
};
