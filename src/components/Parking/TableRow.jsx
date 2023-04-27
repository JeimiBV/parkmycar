import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasks/taskSlice";

function TableRow({ item1, item2 }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <tr key={item1.id}>
      <td className="tdItemOne">
        <button
          onClick={() => {!item1.isBusy? navigate("/reservas"):""; dispatch(addTask(item1.id))}}
          className={`place ${!item1.isBusy ? "Available" : "Busy"}`}
        >
          {item1.num}
        </button>
      </td>
      {item2 && (
        <td className="tdItemTwo">
          <button
            onClick={() => { !item2.isBusy? navigate("/reservas"):""; dispatch(addTask(item2.id))}}
            className={`place ${!item2.isBusy ? "Available" : "Busy"}`}
          >
            {item2.num}
          </button>
        </td>
      )}
    </tr>
  );
}

export default TableRow;