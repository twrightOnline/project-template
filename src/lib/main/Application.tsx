import { observer } from 'mobx-react';
import React from 'react';
import { ApplicationState, App } from '../../state/ApplicationState';
import { RootState } from '../../state/RootState';
import ReactDOM from 'react-dom';
import { MainPageToolbar } from './MainPageToolbar';
import { TodoPageComponent } from '../../applications/todo/TodoComponent';

import firebase from 'firebase/app';
import 'firebase/database';
import { todoStore } from '../../store/TodoStore';
// import 'normalize.css/normalize.css';
// import '@blueprintjs/core/dist/blueprint.css';

// import './index.scss';

const firebaseConfig = {
  apiKey: 'AIzaSyADq6Tmf_IUlcjm6ap3hWhDjn9nV7hCOrk',
  authDomain: 'todo-666b7.firebaseapp.com',
  projectId: 'todo-666b7',
  storageBucket: 'todo-666b7.appspot.com',
  messagingSenderId: '452593978479',
  appId: '1:452593978479:web:5c6ca01afe03a74621119a',
  measurementId: 'G-Y731H72NFZ',
};

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
        return <div>No page selected</div>;
      case App.TODO_PAGE:
        return <TodoPageComponent todoState={rs.todoState} />;
      case App.FOLDER_PAGE:
        return <div>This is the folder page</div>;
    }
  }
}

export class Application {
  private readonly rootState: RootState;
  constructor(public parent: HTMLElement) {
    this.rootState = new RootState();
    firebase.initializeApp(firebaseConfig);
  }

  public init() {
    todoStore.load();

    ReactDOM.render(<ApplicationBody rootState={this.rootState} />, this.parent);
  }
}
