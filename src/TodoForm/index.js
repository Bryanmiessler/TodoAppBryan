import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
  const {
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        cols="30"
        rows="10"
        placeholder="Ejemplo: Descubrir un ser que jamas existió"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={ () => setOpenModal(false)}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
      
    </form>
  )
}

export { TodoForm };