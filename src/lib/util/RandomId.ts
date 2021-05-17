export class RandomId {
  public static newId(length: number): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

    const array = [...new Array(length)].map(() => {
      const number = Math.floor(Math.random() * 58);

      return letters[number];
    });
    return array.join('');
  }
}
