export enum FolderType {
  WORK = 'work',
  PERSONAL = 'personal',
  MISCELLANEOUS = 'miscellaneous',
}

export class FolderDTO {
  public id: string;
  public name: string;

  public type: FolderType;
}
