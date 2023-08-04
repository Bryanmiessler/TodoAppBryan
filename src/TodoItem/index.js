import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css';


function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        onComplete={onComplete}
        completed={completed}
      />
      {/* <span onClick={onComplete} className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
        ✔
      </span> */}
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      {/* <span onClick={onDelete} className="Icon Icon-delete">
        ✖
      </span> */}
      <DeleteIcon
        onDelete={onDelete}
      />
    </li>
  )
}

export { TodoItem };
