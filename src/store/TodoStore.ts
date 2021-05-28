import { TodoDTO } from '../fixed/todo/TodoDTO';
import { todoActions } from '../lib/actions/todoActions';

export type TodoListener = (todos: TodoDTO[]) => void;

class TodoStore {
  public sourceOfTodos: TodoDTO[] = [];

  public listeners: TodoListener[] = [];
  private isLoaded = false;

  public async load() {
    const dtos = await todoActions.fetchSavedTodos();
    if (dtos.length) {
      this.sourceOfTodos = dtos;
      this.notifyListeners();
      this.isLoaded = true;
    }
  }

  public reportIfLoaded(listener: TodoListener) {
    if (this.isLoaded) {
      listener(this.sourceOfTodos);
    }
  }

  public registerListener(listener: TodoListener) {
    const existing = this.listeners.find((lis) => lis === listener);

    if (!existing) {
      this.listeners.push(listener);
      this.reportIfLoaded(listener);
    }
  }

  public notifyListeners() {
    this.listeners.forEach((listener) => listener(this.sourceOfTodos));
  }
}

export const todoStore = new TodoStore();
