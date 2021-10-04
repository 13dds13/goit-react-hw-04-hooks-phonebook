import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactsList from "./contactsList/ContactsList";
import styles from "./container/Container.module.css";
import { APP_INITIAL_DATA, storageKey } from "../data/initialData.json";
import dataUI from "../data/dataUI.json";
import getDataFromStorage from "../service/storageService";

const {
  alertMsg,
  allContacts,
  search,
  titleMain,
  titleSecondary,
  inputName,
  inputTel,
  submitBtn,
  deleteBtn,
  inputSearch,
  noDataToRender,
} = dataUI;

const App = () => {
  const [state, setState] = useState({ ...APP_INITIAL_DATA });
  const { contacts, filter } = state;

  useEffect(() => {
    const dataFromStorage = getDataFromStorage();
    if (!dataFromStorage) return;
    setState((prev) => ({ ...prev, contacts: [...dataFromStorage] }));
  }, []);

  useEffect(() => {
    const dataToStorage = JSON.stringify(contacts);
    localStorage.setItem(storageKey, dataToStorage);
  }, [contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const checkIsDoublingContacts = (newName) => {
    const isAlreadyInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
    if (isAlreadyInContacts) {
      alert(`${newName} ${alertMsg}`);
      return isAlreadyInContacts;
    }
    return isAlreadyInContacts;
  };

  const addNewContact = (name, number) => {
    const isAlreadyInContacts = checkIsDoublingContacts(name);

    if (isAlreadyInContacts) {
      return;
    }

    setState((prev) => ({
      ...prev,
      contacts: [
        ...prev.contacts,
        {
          name,
          id: nanoid(),
          number,
        },
      ],
    }));

    return !isAlreadyInContacts;
  };

  const deleteContact = (contactToDelete) => {
    const filteredContacts = contacts.filter(
      ({ name }) => name !== contactToDelete
    );
    setState((prev) => ({ ...prev, contacts: [...filteredContacts] }));
  };

  const contactsToRender = ({ contacts, filter }) => {
    if (!filter) {
      return { contacts, title: `${allContacts}` };
    }

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return { contacts: filteredContacts, title: `${search}` };
  };

  const { container, title } = styles;
  const contactsDataToRender = contactsToRender(state);

  return (
    <div className={container}>
      <h2 className={title}>{titleMain}</h2>

      <ContactForm
        dataUI={{ inputName, inputTel, submitBtn }}
        addNewContact={addNewContact}
      />

      <h2 className={title}>{titleSecondary}</h2>

      <Filter
        inputSearch={inputSearch}
        filter={filter}
        handleChange={handleChange}
      />

      <ContactsList
        contactsDataToRender={contactsDataToRender}
        deleteContact={deleteContact}
        dataUI={{ deleteBtn, noDataToRender }}
      />
    </div>
  );
};

export default App;
