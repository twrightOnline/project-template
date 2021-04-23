import React from 'react';
import { App, ApplicationState } from './ApplicationState';

interface MPTProps {
  appState: ApplicationState;
}

export class MainPageToolbar extends React.Component<MPTProps> {
  public render() {
    return <div onClick={() => this.props.appState.goToPage(App.TODO_PAGE)}>Todo</div>;
  }
}
