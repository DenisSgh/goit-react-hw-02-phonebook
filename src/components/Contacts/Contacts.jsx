import PropTypes from 'prop-types';

import Section from 'components/Section';
import s from './Contacts.module.css';

const Contacts = ({ title, contacts, buttonDelete }) => {
  return (
    <Section title={title}>
      <ul className={s.list}>
        {contacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <li className={s.item} key={id}>
              {name}: {number}
              <button type="button" onClick={() => buttonDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
  buttonDelete: PropTypes.func.isRequired,
};

export default Contacts;