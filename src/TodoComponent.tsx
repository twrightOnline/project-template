import React from 'react';
import { TodoState } from './TodoState';

interface TProps {
  todoState: TodoState;
}
export class TodoPageComponent extends React.Component<TProps> {
  public render() {
    return <div>TodoPageComponent</div>;
  }
}
