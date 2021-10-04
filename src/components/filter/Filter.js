import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { wrap } from "./Filter.module.css";

const Filter = ({ handleChange, filter, inputSearch }) => {
  const findContactId = nanoid();
  return (
    <div className={wrap}>
      <label htmlFor={findContactId}>{inputSearch}</label>
      <input
        id={findContactId}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  inputSearch: PropTypes.string.isRequired,
};

export default Filter;
