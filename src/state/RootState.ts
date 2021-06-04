import { ApplicationState } from './ApplicationState';
import { TodoState } from '../applications/todo/TodoState';
import { FolderState } from '../applications/folder/FolderState';
export class RootState {
  public readonly applicationState: ApplicationState;
  public readonly todoState: TodoState;
  public readonly folderState: FolderState;

  constructor() {
    this.applicationState = new ApplicationState();
    this.todoState = new TodoState();
    this.folderState = new FolderState();
  }
}
