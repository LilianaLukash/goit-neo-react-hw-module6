import styles from './Contact.module.css';
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contact }) {
    return (
        <li className={styles.item}>
            <div> <IoPersonSharp />  {contact.name}</div>
           <div> <FaPhone /> {contact.number} </div>
            <button className={styles.button} onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
    )
}