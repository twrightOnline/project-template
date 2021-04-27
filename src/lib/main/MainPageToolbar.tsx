import React from 'react';

import { Tabs, Tab } from '@blueprintjs/core';
import { App, ApplicationState } from '../state/ApplicationState';

import './main-page-toolbar.scss';

interface MPTProps {
  appState: ApplicationState;
}

export class MainPageToolbar extends React.Component<MPTProps> {
  public render() {
    // return <div onClick={() => this.props.appState.goToPage(App.TODO_PAGE)}>Todo</div>;
    const { appState } = this.props;
    const selected = appState.currentPage;
    return (
      <div className='toolbar-container'>
        <div className='toolbar-container__top'>
          <div className='toolbar-top__logo'>Todo App</div>
          <div className='toolbar-top__settings'>settings</div>
        </div>
        <div className='toolbar-container__bottom'>
          <Tabs
            className='toolbar-bottom__nav-tabs'
            id='main-nav-tabs'
            onChange={(id: App) => appState.goToPage(id)}
            selectedTabId={appState.currentPage}
          >
            <Tab id={App.TODO_PAGE} title='Todo' className={'toolbar-bottom__tab'} />
            <Tab id={App.FOLDER_PAGE} title='Folders' className={'toolbar-bottom__tab'} />
          </Tabs>
        </div>
      </div>
    );
  }
}
