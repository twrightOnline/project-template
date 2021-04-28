import React from 'react';
import { TodoState } from '../../applications/todo/TodoState';

interface FCProps {
  todoState: TodoState;
}
export class FolderColumn extends React.Component<FCProps> {
  public render() {
    const { todoState } = this.props;
    const { folderColumnState } = todoState;
    return (
      <div className='folder-column'>
        {/* <FolderColumnToolbar /> */}
        {/* <FolderTree /> */}
        <div className='column-toolbar'></div>
      </div>
    );
  }
}
