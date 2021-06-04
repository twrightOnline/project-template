import React from 'react';
import { FolderState } from '../FolderState';
import { HTMLTable } from '@blueprintjs/core';
import { RandomId } from '../../../lib/util/RandomId';
import { observer } from 'mobx-react';

interface FTProps {
  folderState: FolderState;
}

@observer
export class FolderTable extends React.Component<FTProps> {
  public render() {
    const { folderState } = this.props;

    return (
      <HTMLTable bordered={true} interactive={true}>
        <thead>
          <tr key={RandomId.newId(6)}>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {folderState.folders.map((folder) => (
            <tr key={RandomId.newId(6)}>
              <td>{folder.name}</td>
              <td>{folder.type}</td>
            </tr>
          ))}
        </tbody>
      </HTMLTable>
    );
  }
}
