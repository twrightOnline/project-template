import { observable } from 'mobx';
import { FolderDTO } from '../../fixed/folder/FolderDTO';
import { MutableFolderState } from './MutableFolderState';
import { Folder } from '../../lib/folder/Folder';
import { folderActions } from '../../lib/actions/folderActions';
import { folderStore } from '../../store/FolderStore';

export class FolderState {
  @observable public folders: Folder[] = [];
  @observable public mutableFolder?: MutableFolderState;

  constructor() {
    folderStore.registerListener(this.onLoad);
  }

  public addFolder() {
    this.mutableFolder = new MutableFolderState();
  }

  public cancelAddFolder() {
    this.mutableFolder = undefined;
  }

  public async saveNewFolder() {
    const dto = this.mutableFolder?.toDTO();

    const saved = folderActions.saveFolder(dto);

    if (saved) {
      this.folders.push(this.makeFolder(dto));
    }
  }

  private onLoad = (folderDtos: FolderDTO[]) => {
    this.folders = folderDtos.map((dto: FolderDTO) => this.makeFolder(dto));
  };

  private makeFolder = (dto: FolderDTO) => {
    return new Folder(dto);
  };
}
