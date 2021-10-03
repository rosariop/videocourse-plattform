import {Course} from "./Course.js";

export class User {

  private _profilePictureLink: String;

  private _username: String;

  private _purchasedCourses: Array<Course>


  get profilePictureLink(): String {
    return this._profilePictureLink;
  }

  set profilePictureLink(value: String) {
    this._profilePictureLink = value;
  }

  get username(): String {
    return this._username;
  }

  set username(value: String) {
    this._username = value;
  }

  get purchasedCourses(): Array<Course> {
    return this._purchasedCourses;
  }

  set purchasedCourses(value: Array<Course>) {
    this._purchasedCourses = value;
  }

  constructor(profilePictureLink: String, username: String, purchasedCourses: Array<Course>) {
    this._profilePictureLink = profilePictureLink;
    this._username = username;
    this._purchasedCourses = purchasedCourses;
  }
}
