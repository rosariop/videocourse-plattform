import { Video } from "./Video.js";

export class Course {
    private _title: String;

    private _price: Number;

    private _description: String;

    private _videos: Array<Video>;


  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get price(): Number {
    return this._price;
  }

  set price(value: Number) {
    this._price = value;
  }

  get description(): String {
    return this._description;
  }

  set description(value: String) {
    this._description = value;
  }

  get videos(): Array<Video> {
    return this._videos;
  }

  set videos(value: Array<Video>) {
    this._videos = value;
  }


  constructor(title: String, price: Number, description: String, videos: Array<Video>) {
    this._title = title;
    this._price = price;
    this._description = description;
    this._videos = videos;
  }
}
