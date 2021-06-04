import React from 'react';
import { TodoState } from './TodoState';
import { TodoTable } from './table/TodoTable';
import { TodoOptionsToolbar } from './toolbar/TodoOptionsToolbar';
import { TodoTableState } from './table/TodoTableState';

import './todo-component.scss';

interface TProps {
  todoState: TodoState;
}
export class TodoPageComponent extends React.Component<TProps> {
  constructor(props: TProps) {
    super(props);
  }
  public render() {
    const ts = this.props.todoState;
    return (
      <div className='todo-page-container'>
        <TodoOptionsToolbar todoState={ts} />
        <TodoTable todoState={ts} />
      </div>
    );
  }
}
