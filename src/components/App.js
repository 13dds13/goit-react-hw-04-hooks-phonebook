import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactsList from "./contactsList/ContactsList";
import styles from "./container/Container.module.css";
import { stateInitialData, storageKey } from "../data/initialData.json";
import dataUI from "../data/dataUI.json";

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

class App extends Component {
  state = { ...stateInitialData };

  componentDidMount() {
    const dataFromStorage = localStorage.getItem(storageKey);
    if (!dataFromStorage) {
      return;
    }
    const parsedData = JSON.parse(dataFromStorage);
    this.setState({ contacts: [...parsedData] });
  }

  componentDidUpdate(prevState) {
    const prevContacts = prevState.contacts;
    const currentContacts = this.state.contacts;
    const wasChanges = prevContacts !== currentContacts;
    if (wasChanges) {
      const dataToStorage = JSON.stringify(currentContacts);
      localStorage.setItem(storageKey, dataToStorage);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  checkForDoublingContacts = (newName) => {
    const isAlreadyInContacts = this.state.contacts.find(
      (item) => item.name.toLowerCase() === newName.toLowerCase()
    );

    if (isAlreadyInContacts) {
      alert(`${newName} ${alertMsg}`);
      return;
    }

    return !isAlreadyInContacts;
  };

  addNewContact = (name, number) => {
    const canAddContact = this.checkForDoublingContacts(name);

    if (!canAddContact) {
      return;
    }

    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        {
          name,
          id: nanoid(),
          number,
        },
      ],
    }));

    return true;
  };

  deleteContact = (contactToDelete) => {
    const filteredContacts = this.state.contacts.filter(
      ({ name }) => name !== contactToDelete
    );
    this.setState({ contacts: [...filteredContacts] });
  };

  contactsToRender = ({ contacts, filter }) => {
    if (!filter) return { contacts, title: `${allContacts}` };

    const filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return { contacts: filteredContacts, title: `${search}` };
  };

  render() {
    const { container, title } = styles;

    return (
      <div className={container}>
        <h2 className={title}>{titleMain}</h2>

        <ContactForm
          dataUI={{ inputName, inputTel, submitBtn }}
          addNewContact={this.addNewContact}
        />

        <h2 className={title}>{titleSecondary}</h2>

        <Filter
          inputSearch={inputSearch}
          filter={this.state.filter}
          handleChange={this.handleChange}
        />

        <ContactsList
          contactsDataToRender={this.contactsToRender(this.state)}
          deleteContact={this.deleteContact}
          dataUI={{ deleteBtn, noDataToRender }}
        />
      </div>
    );
  }
}

export default App;
