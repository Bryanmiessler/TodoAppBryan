import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  let message;

  if (totalTodos === 0) {
    message = 'Animate y crea tu primer TODO';
  } else if(completedTodos === totalTodos) {
    message = '¡Felicitaciones has completado todas tus tareas!';
  }else {
    message = (
      <>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </>
    );
  }

  return(
      <h1 className="TodoCounter">
        {message}
      </h1>
    // completed === total  ?
    // <h1 className="TodoCounter">
    //   ¡Felicitaciones has completado todas tus tareas!
    // </h1>
    // :
    // <h1 className="TodoCounter">
    //   Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    // </h1>
  )
}

// function TodoCounter({ total, completed }) {
//   const message =
//     total === 0
//       ? 'Animate y crea tu primer TODO'
//       : completed === total
//       ? '¡Felicitaciones has completado todas tus tareas!'
//       : `Has completado ${completed} de ${total} TODOs`;

//   return(
//     <h1 className="TodoCounter">{message}</h1>
//   ) 
// }

export { TodoCounter };