import { FaTrashAlt } from "react-icons/fa";

const ListItem = (props) => {
  return (
    <li className="flex justify-between items-center bg-slate-300 p-2 rounded ">
      <div onClick={() => props.handleCheck(props.item.id)}>
        <input
          className=" h-4 w-4     rounded transition-all "
          type="checkbox"
          checked={props.item.checked}
          onChange={() => props.handleCheck(props.item.id)}
        />

        <label
          className={`ml-1 text-slate-600 text-wrap transition-all  ${
            props.item.checked ? "text-slate-400 line-through" : ""
          } `}
        >
          {props.item.name}
        </label>
      </div>
      <FaTrashAlt
        onClick={() => props.handleDelete(props.item.id)}
        className="text-blue-400 hover:text-red-400 focus:text-red-400"
        role="button"
        tabIndex="0"
        aria-label={`Delete ${props.item.name}`}
      />
    </li>
  );
};

export default ListItem;
