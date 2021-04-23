import { observer } from 'mobx-react';
import React from 'react';
import { ApplicationState, App } from './ApplicationState';
import { RootState } from './RootState';
import ReactDOM from 'react-dom';
import { MainPageToolbar } from './MainPageToolbar';
import { TodoPageComponent } from './TodoComponent';

interface Props {
  rootState: RootState;
}

@observer
export class ApplicationBody extends React.PureComponent<Props> {
  public render() {
    const applicationState = this.props.rootState.applicationState;

    return (
      <div>
        <MainPageToolbar appState={applicationState} />
        {this.renderComponent(applicationState)}
      </div>
    );
  }

  private renderComponent(appState: ApplicationState) {
    const rs = this.props.rootState;
    switch (appState.currentPage) {
      case App.NONE:
        <div>No page selected</div>;
      case App.TODO_PAGE:
        return <TodoPageComponent todoState={rs.todoState} />;
    }
    return;
  }
}

export class Application {
  private readonly rootState: RootState;
  constructor(public parent: HTMLElement) {
    this.rootState = new RootState();
  }

  public init() {
    ReactDOM.render(<ApplicationBody rootState={this.rootState} />, this.parent);
  }
}
