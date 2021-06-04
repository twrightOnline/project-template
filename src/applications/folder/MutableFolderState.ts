import { observable } from 'mobx';
import { FolderType, FolderDTO } from '../../fixed/folder/FolderDTO';
import { Folder } from '../../lib/folder/Folder';
import { RandomId } from '../../lib/util/RandomId';

export class MutableFolderState {
  @observable public id = '';
  @observable public name = '';
  @observable public type: FolderType = FolderType.WORK;

  constructor(folder?: Folder) {
    if (folder) {
      this.id = folder.id;
      this.name = folder.name;
      this.type = folder.type;
    } else {
      this.id = RandomId.newId(8);
    }
  }

  public setName(name: string) {
    this.name = name;
  }

  public setType(type: FolderType) {
    this.type = type;
  }

  public toDTO() {
    const dto = new FolderDTO();
    dto.id = this.id;
    dto.name = this.name;
    dto.type = this.type;

    return dto;
  }
}
