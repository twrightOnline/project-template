import React from 'react';
import { TodoState } from './TodoState';
import { FolderColumn } from '../../lib/folders/FolderColumn';
import { FolderColumnState } from '../../lib/folders/FolderColumnState';

interface TProps {
  todoState: TodoState;
}
export class TodoPageComponent extends React.Component<TProps> {
  constructor(props: TProps) {
    super(props);
    this.props.todoState.folderColumnState = new FolderColumnState();
  }
  public render() {
    const ts = this.props.todoState;
    return (
      <div className='todo-page-container'>
        <FolderColumn todoState={ts} />
        {/* <TodoTable /> */}
      </div>
    );
  }
}
