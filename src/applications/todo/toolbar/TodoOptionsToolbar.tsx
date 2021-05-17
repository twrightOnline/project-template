import React from 'react';
import { TodoState } from '../TodoState';
import { Button, Dialog, Classes, InputGroup } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { TodoUrgency } from '../../../fixed/todo/TodoDTO';
import { RandomUtil } from '../../../lib/util/RandomId';

interface TOTProps {
  todoState: TodoState;
}

const UrgencySelect = Select.ofType<TodoUrgency>();

@observer
export class TodoOptionsToolbar extends React.Component<TOTProps> {
  @observable private isOpen = false;
  public render() {
    return (
      <div className='todo__options-toolbar'>
        <Button onClick={() => this.handleOpen()}>Create new</Button>
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
    const tts = this.props.todoState.todoTableState;
    return (
      <div className={Classes.DIALOG_BODY}>
        <InputGroup
          placeholder='name'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => tts.setName(e.target.value)}
        />
        <InputGroup
          placeholder='folder'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => tts.setFolder(e.target.value)}
        />
        <UrgencySelect
          items={Object.values(TodoUrgency)}
          onItemSelect={(item: TodoUrgency) => undefined}
          itemRenderer={(todo) => (
            <div key={todo} onClick={() => tts.setUrgency(todo)}>
              {todo}
            </div>
          )}
          activeItem={tts.urgency}
        >
          <Button text='Select urgency' />
        </UrgencySelect>

        <Button text='Cancel' onClick={() => this.handleOpen()} />
        <Button
          text='Save'
          onClick={() => {
            tts.save();
            this.handleOpen();
          }}
        />
      </div>
    );
  }

  private readonly handleOpen = () => {
    this.isOpen = !this.isOpen;
  };
}
