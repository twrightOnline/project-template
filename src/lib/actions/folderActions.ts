import firebase from 'firebase/app';
import { FolderDTO } from '../../fixed/folder/FolderDTO';
import { Folder } from '../folder/Folder';
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

  public async fetchSavedFolders() {
    const db = firebase.firestore();
    return db
      .collection('folder')
      .get()
      .then((snapshot) => {
        const list: FolderDTO[] = [];
        snapshot.forEach((item) => {
          const data = item.data();
          const dto = new FolderDTO();
          dto.id = data.id;
          dto.name = data.name;
          dto.type = data.type;
          list.push(dto);
        });
        return list;
      });
  }
}

export const folderActions = new FolderActions();
