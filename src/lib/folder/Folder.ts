import { FolderType, FolderDTO } from '../../fixed/folder/FolderDTO';

export class Folder {
  public id: string;
  public name: string;
  public type: FolderType;

  constructor(dto: FolderDTO) {
    this.id = dto.id;
    this.name = dto.name;
    this.type = dto.type;
  }
}
