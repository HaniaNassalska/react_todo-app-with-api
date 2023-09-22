import { useTodo } from '../../provider/todoProvider';
import { FilterType } from '../../types/FilterType';

import { TodoCount } from '../TodoCount';

export const Footer = () => {
  const {
    handleSetFilterTodos,
    deleteCompleted,
    todos,
    allTodosAreActive,
    filterTodos,
  } = useTodo();

  const addFilterType = (filterType: FilterType) => {
    handleSetFilterTodos(filterType);
  };

  const completedTodos = todos.filter(t => t.completed);

  return (
    <footer className="todoapp__footer">
      <TodoCount />
      <nav className="filter">
        <a
          href="#/"
          className={filterTodos === 'all'
            ? 'filter__link selected' : 'filter__link'}
          onClick={() => addFilterType('all')}
        >
          All
        </a>

        <a
          href="#/active"
          className={filterTodos === 'active'
            ? 'filter__link selected' : 'filter__link'}
          onClick={() => addFilterType('active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={filterTodos === 'completed'
            ? 'filter__link selected' : 'filter__link'}
          onClick={() => addFilterType('completed')}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        onClick={() => deleteCompleted(completedTodos)}
        disabled={allTodosAreActive}
      >
        Clear completed
      </button>
    </footer>
  );
};
