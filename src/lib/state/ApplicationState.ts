import { action, observable } from 'mobx';

export enum App {
  NONE = 'none',
  TODO_PAGE = 'todo-page',
  FOLDER_PAGE = 'folder-page',
}

export class ApplicationState {
  @observable public currentPage: App = App.NONE;

  public goToPage(page: App) {
    this.currentPage = page;
  }
}
