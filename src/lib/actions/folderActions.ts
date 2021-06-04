import firebase from 'firebase/app';
import { FolderDTO } from '../../fixed/folder/FolderDTO';
class FolderActions {
  public async saveFolder(dto: FolderDTO) {
    const db = firebase.firestore();

    db.collection('folder')
      .doc(dto.id)
      .set({
        id: dto.id,
        name: dto.name,
        type: dto.type,
      })
      .then((saved) => {
        // folderStore.addFolder(dto)
        return saved;
      })
      .catch((error) => console.error(' could not save folder: ', error));
  }
}

export const folderActions = new FolderActions();
