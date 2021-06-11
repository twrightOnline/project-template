import { Folder } from '../lib/folder/Folder';
import { todoActions } from '../lib/actions/todoActions';
import { folderActions } from '../lib/actions/folderActions';
import { FolderDTO } from '../fixed/folder/FolderDTO';

export type FolderListener = (dto: FolderDTO[]) => void;

class FolderStore {
  public folders: FolderDTO[] = [];
  public listeners: FolderListener[] = [];
  public isLoaded = false;

  public async load() {
    const dtos = await folderActions.fetchSavedFolders();
    if (dtos.length) {
      this.folders = dtos;
      this.notifyListeners();
      this.isLoaded = true;
    }
  }

  public reportIfLoaded(listener: FolderListener) {
    if (this.isLoaded) {
      listener(this.folders);
    }
  }

  public registerListener(listener: FolderListener) {
    const existing = this.listeners.find((lis) => lis === listener);

    if (!existing) {
      this.listeners.push(listener);
      this.reportIfLoaded(listener);
    }
  }

  public notifyListeners() {
    this.listeners.forEach((listener) => listener(this.folders));
  }
}

export const folderStore = new FolderStore();
