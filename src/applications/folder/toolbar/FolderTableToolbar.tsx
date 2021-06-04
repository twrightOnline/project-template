import React from 'react';
import { Button, Dialog, Classes, InputGroup } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import { FolderState } from '../FolderState';
import { observable } from 'mobx';
import { FolderType } from '../../../fixed/folder/FolderDTO';
import { observer } from 'mobx-react';

interface FTTProps {
  folderState: FolderState;
}

const FolderTypeSelect = Select.ofType<FolderType>();

@observer
export class FolderTableToolbar extends React.Component<FTTProps> {
  @observable public isOpen = false;
  public render() {
    const fs = this.props.folderState;
    return (
      <div className='todo__options-toolbar'>
        <Button
          onClick={() => {
            this.toggleOpen();
            fs.addFolder();
          }}
        >
          Create new
        </Button>
        <Dialog
          autoFocus={true}
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          enforceFocus={true}
          isOpen={this.isOpen}
          usePortal={true}
        >
          {this.renderDialogContent()}
        </Dialog>
      </div>
    );
  }

  private renderDialogContent() {
    const fs = this.props.folderState;
    return (
      <div className='folder-dialog__container'>
        <div className={Classes.DIALOG_BODY}>
          <InputGroup
            placeholder='name'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              fs.mutableFolder?.setName(e.target.value)
            }
          />
          <FolderTypeSelect
            items={Object.values(FolderType)}
            onItemSelect={(_item: FolderType) => undefined}
            itemRenderer={(folder) => (
              <div key={folder} onClick={() => fs.mutableFolder.setType(folder)}>
                {folder}
              </div>
            )}
          >
            <Button text='Select type' />
          </FolderTypeSelect>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <Button
            text='Cancel'
            onClick={() => {
              this.toggleOpen();
              fs.cancelAddFolder();
            }}
          />
          <Button
            text='Save'
            onClick={() => {
              this.toggleOpen();
              fs.saveNewFolder();
            }}
          />
        </div>
      </div>
    );
  }

  private readonly toggleOpen = () => {
    this.isOpen = !this.isOpen;
  };
}
