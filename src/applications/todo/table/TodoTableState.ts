import { observable } from 'mobx';
import { TodoDTO, TodoUrgency } from '../../../fixed/todo/TodoDTO';
import { todoActions } from '../../../lib/actions/todoActions';
import { RandomId } from '../../../lib/util/RandomId';

export const urgencyOptions = [
  {
    id: TodoUrgency.HIGH,
    label: 'High',
  },
  {
    id: TodoUrgency.MEDIUM,
    label: 'Medium',
  },
  {
    id: TodoUrgency.LOW,
    label: 'Low',
  },
];

export class TodoTableState {
  @observable public todoList: TodoDTO[] = [];
  @observable public name = '';
  @observable public folder = '';
  @observable public urgency: TodoUrgency;

  public createNewTodo() {
    const dto = new TodoDTO();
    dto.id = RandomId.newId(8);
    dto.name = this.name;
    dto.folder = this.folder;
    dto.urgency = this.urgency;

    return dto;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setFolder(folder: string) {
    this.folder = folder;
  }

  public setUrgency(urgency: TodoUrgency) {
    this.urgency = urgency;
  }

  public async save() {
    const newDto = this.createNewTodo();

    const saved = todoActions.saveTodo(newDto);

    if (saved) {
      this.todoList.push(newDto);
    }
  }
}
