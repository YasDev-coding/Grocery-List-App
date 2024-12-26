import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const groceries = [
  {
    id: 1,
    name: "Milk",
    checked: false,
  },
  {
    id: 2,
    name: "Eggs",
    checked: false,
  },
  {
    id: 3,
    name: "Bread",
    checked: false,
  },
  {
    id: 4,
    name: "Cheese",
    checked: true,
  },
];

const GroceriesList = () => {
  const [groceriesList, setGroceriesList] = useState(groceries);
  return (
    <main className="">
      <ul className="">
        {groceriesList.map((item) => (
          <li className="flex justify-between items-center" key={item.id}>
            <div>
              <input type="checkbox" checked={item.checked} readOnly />
              <label className="ml-1">{item.name}</label>
            </div>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default GroceriesList;
