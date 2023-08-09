import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    setOpenModal,
    addTodo,
    sincronizeTodos,
  } = useTodos();
  
  return(
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        loading={loading}
        error={error}
        totalTodos={totalTodos}
        searchValue={searchValue}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        render = {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )}
      />
      {/* <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
            />
          ))}
        </TodoList> */}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}

      <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />
    </>
  );
  
};

export default App;
