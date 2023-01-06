export class Post {
  _id: string;
  titre: string;
  contenu: string;
  constructor(_id: string, titre: string, contenu: string) {
    this._id = _id;
    this.titre = titre;
    this.contenu = contenu;
  }
}
