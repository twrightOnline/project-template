import { TodoDTO } from '../fixed/todo/TodoDTO';
import { todoActions } from '../lib/actions/todoActions';

class TodoStore {
  public sourceOfTodos: TodoDTO[] = [];

  public load() {
    const dtos = todoActions.fetchSavedTodos();
    if (dtos) {
      // this.sourceOfTodos = dtos;
    }
  }
}

export const todoStore = new TodoStore();
