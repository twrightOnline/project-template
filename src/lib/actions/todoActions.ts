import firebase from 'firebase/app';
import { TodoDTO } from '../../fixed/todo/TodoDTO';
import { todoStore } from '../../store/TodoStore';
import { isString } from 'util';

interface DatabaseObject {
  dto: TodoDTO;
}

class TodoActions {
  public async saveTodo(dto: TodoDTO) {
    const db = firebase.firestore();
    db.collection('todo')
      .doc(dto.id)
      .set({
        id: dto.id,
        name: dto.name,
        folder: dto.folder,
        completed: dto.completed ?? false,
        urgency: dto.urgency,
      })
      .then((saved) => {
        return saved;
      })
      .catch((error) => {
        console.error(' could not save', error);
      });
  }

  public async fetchSavedTodos() {
    const db = firebase.firestore();
    return db
      .collection('todo')
      .get()
      .then((snapshot) => {
        const list: TodoDTO[] = [];
        snapshot.forEach((item) => {
          const data = item.data();
          const dto = new TodoDTO();
          dto.id = data.id;
          dto.name = data.name;
          dto.folder = data.folder;
          dto.completed = data.completed;

          dto.urgency = data.urgency;
          // list.push(dto);
          list.push(dto);
        });
        return list;
      });
  }

  // USE CLOUD FIRESTORE FOR TYPESCRIPT
}

export const todoActions = new TodoActions();
