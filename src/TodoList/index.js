import './TodoList.css';

function TodoList({ 
  error,
  children,
  loading,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  render,
  totalTodos,
  onEmptySearchResults,
  searchValue
}) {
  return (
    <section className="TodoList">
      {error && onError() }
      {loading && onLoading() }
      {(!loading && !totalTodos) && onEmptyTodos()}
      {(!!totalTodos && !searchedTodos.length)&& onEmptySearchResults(searchValue)}
      {(!loading && !error) && searchedTodos.map(render)}
      
      <ul>
        {children}
      </ul>
    </section>
  );
}

export { TodoList };