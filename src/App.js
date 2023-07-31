import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  { text: 'Armar escritorio', completed: true},
  { text: 'Saltar Lazo', completed: true},
  { text: 'Mercar', completed: false},
  { text: 'Barrer', completed: false},
  { text: 'Trapear', completed: true},
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
