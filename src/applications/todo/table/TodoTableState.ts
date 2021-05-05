import { observable } from 'mobx';
import { TodoDTO, TodoUrgency } from '../../../fixed/todo/TodoDTO';

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

  public save() {
    const newDto = this.createNewTodo();
    this.todoList.push(newDto);
  }
}
