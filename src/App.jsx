import AddItem from "./components/addItem";
import Footer from "./components/Footer";
import GroceriesList from "./components/GroceriesList";
import Header from "./components/Header";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function App() {
  const [groceriesList, setGroceriesList] = useState(
    JSON.parse(localStorage.getItem("groceries"))
  );

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(groceriesList));
  }, [groceriesList]);

  const handleCheck = (itemId) => {
    setGroceriesList(
      groceriesList.map((grocery) =>
        grocery.id === itemId
          ? { ...grocery, checked: !grocery.checked }
          : grocery
      )
    );
  };

  const handleDelete = (itemId) => {
    setGroceriesList(groceriesList.filter((grocery) => grocery.id !== itemId));
  };

  const handleSubmit = (formData) => {
    const newItem = {
      id: nanoid(),
      name: formData.get("Item"),
      checked: false,
    };
    setGroceriesList([...groceriesList, newItem]);
  };

  return (
    <>
      <Header />
      <main className="px-4 flex flex-col gap-y-3">
        <AddItem handleSubmit={handleSubmit} />
        <GroceriesList
          groceriesList={groceriesList}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer listLength={groceriesList.length} />
    </>
  );
}
