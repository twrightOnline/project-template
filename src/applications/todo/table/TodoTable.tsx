import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import { TodoState } from '../TodoState';
import { observer } from 'mobx-react';

interface TTProps {
  todoState: TodoState;
}

@observer
export class TodoTable extends React.Component<TTProps> {
  public render() {
    const tts = this.props.todoState.todoTableState;
    return (
      <HTMLTable bordered={true} interactive={true}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Folder</th>
            <th> Urgency</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {tts.todoList.map((todo) => (
            <tr>
              <td>{todo.name}</td>
              <td>{todo.folder}</td>
              <td>{todo.urgency}</td>
              <td>{todo.completed}</td>
            </tr>
          ))}
        </tbody>
      </HTMLTable>
    );
  }
}
