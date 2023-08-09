import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item : todos,
    saveItem : saveTodos,
    error,
    loading,
    sincronizeItem: sincronizeTodos,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter( todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  })

  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }
  
  const addTodo = (text) => {
    const newTodos = [...todos, {
      text,
      completed: false,
    }];
    saveTodos(newTodos)
  }

  return (
    {
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodos,
      deleteTodos,
      openModal,
      setOpenModal,
      addTodo,
      sincronizeTodos,
    }
  )
}

export { useTodos };