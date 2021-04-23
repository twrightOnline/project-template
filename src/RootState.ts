import { ApplicationState } from './ApplicationState';
import { TodoState } from './TodoState';
export class RootState {
  public readonly applicationState: ApplicationState;
  public readonly todoState: TodoState;

  constructor() {
    this.applicationState = new ApplicationState();
    this.todoState = new TodoState();
  }
}
