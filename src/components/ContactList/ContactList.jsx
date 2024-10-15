
import { useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </ul>
    </div>
  );
}
