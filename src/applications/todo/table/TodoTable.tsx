import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import { TodoState } from '../TodoState';
import { observer } from 'mobx-react';

import { RandomId } from '../../../lib/util/RandomId';

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
          <tr key={RandomId.newId(6)}>
            <th>Name</th>
            <th>Folder</th>
            <th> Urgency</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {tts.todoList.map((todo) => (
            <tr key={RandomId.newId(6)}>
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
