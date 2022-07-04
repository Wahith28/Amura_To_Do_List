import { Checkbox } from "@mui/material";
import deleteIcon from "../Icons/VectorDelete.png";

const Todo = (props) => {
  return (
    <div className="todo">
      <span
        style={{ textDecoration: props.todo.check ? "line-through" : "none" }}
      >
        <Checkbox
          onClick={props.handleCheck}
          checked={props.todo.check}
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "#00ffcc"
            }
          }}
        />
        &nbsp;
        {props.todo.text}
      </span>
      <button style={{ backgroundColor: "black" }} onClick={props.removeTodo}>
        <img
          style={{ width: "15px", height: "18px" }}
          src={deleteIcon}
          alt="delete"
        />
      </button>
    </div>
  );
};

export default Todo;
