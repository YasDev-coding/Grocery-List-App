import ListItem from "./ListItem.jsx";

const GroceriesList = (props) => {
  return props.groceriesList.length === 0 ? (
    <p className="text-center ">Your List is Empty</p>
  ) : (
    <ul className="flex flex-col gap-y-2">
      {props.groceriesList.map((item) => (
        <ListItem
          key={item.id}
          handleCheck={props.handleCheck}
          handleDelete={props.handleDelete}
          item={item}
        />
      ))}
    </ul>
  );
};

export default GroceriesList;
