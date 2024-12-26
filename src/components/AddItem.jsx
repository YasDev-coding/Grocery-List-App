import React from "react";
import { FaPlus } from "react-icons/fa";
export const AddItem = (props) => {
  return (
    <form action={props.handleSubmit} className="flex justify-between gap-x-4">
      <label htmlFor="addItem" className="sr-only" />
      <input
        className="bg-slate-300 p-2 rounded transition-all flex-1  "
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        autoFocus
        name="Item"
      />
      <button
        type="submit"
        aria-label="Add Item"
        className="text-blue-400 bg-slate-300  px-3 rounded"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
