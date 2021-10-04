import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";

const { listWrap, listItem, name, number, btn } = styles;

const ContactsList = ({
  contactsDataToRender: { title, contacts },
  deleteContact,
  dataUI: { deleteBtn, noDataToRender },
}) => {
  return contacts.length ? (
    <>
      <p>{title}</p>
      <ul className={listWrap}>
        {contacts.map((item) => (
          <li className={listItem} key={item.id}>
            {" "}
            <p className={name}>
              {item.name}: <span className={number}>{item.number}</span>
            </p>
            <button
              className={btn}
              type="button"
              onClick={() => deleteContact(item.name)}
            >
              {deleteBtn}
            </button>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p>{noDataToRender}</p>
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func,
  contactsDataToRender: PropTypes.shape({
    title: PropTypes.string,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
  }),
  dataUI: PropTypes.shape({
    deleteBtn: PropTypes.string,
    noDataToRender: PropTypes.string,
  }),
};

export default ContactsList;
