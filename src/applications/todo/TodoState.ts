import { FolderColumnState } from '../../lib/folders/FolderColumnState';
import { TodoTableState } from './table/TodoTableState';
export class TodoState {
  // public folderColumnState?: FolderColumnState;
  public todoTableState: TodoTableState = new TodoTableState();
  constructor() {}
}
