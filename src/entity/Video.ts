export class Video {

  private _title: String;

  private _link: String;


  constructor(title: String, link: String) {
    this._title = title;
    this._link = link;
  }


  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get link(): String {
    return this._link;
  }

  set link(value: String) {
    this._link = value;
  }
}
