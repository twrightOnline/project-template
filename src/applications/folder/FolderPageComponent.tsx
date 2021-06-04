import React from 'react';
import { FolderState } from './FolderState';
import { FolderTable } from './table/FolderTable';
import { FolderTableToolbar } from './toolbar/FolderTableToolbar';

interface FPCProps {
  folderState: FolderState;
}

export class FolderPageComponent extends React.Component<FPCProps> {
  public render() {
    return (
      <div className='folder-page-container'>
        <FolderTableToolbar folderState={this.props.folderState} />
        <FolderTable folderState={this.props.folderState} />
      </div>
    );
  }
}
