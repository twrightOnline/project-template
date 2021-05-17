import firebase from 'firebase/app';
import { TodoDTO } from '../../fixed/todo/TodoDTO';

class TodoActions {
  public async saveTodo(dto: TodoDTO) {
    const save = firebase.database().ref('todo/').set({
      dto,
    });

    if (save) {
      return dto;
    } else {
      return alert(' could not save');
    }
  }

  public async fetchSavedTodos() {
    const db = firebase.database().ref('todo/');

    db.once('value', (snapshot) => {
      const val = snapshot.val();
      return val;
    });

    // .then((snapshot) => {
    //   if (snapshot.exists()) {
    //     return snapshot.val()
    //   } else {
    //     return alert('no data loaded');
    //   }
    // })
    // .catch((error) => console.error(error));
  }
}

export const todoActions = new TodoActions();
