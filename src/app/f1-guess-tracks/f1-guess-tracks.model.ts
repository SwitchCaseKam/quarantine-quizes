export class TrackInfo {
  shortName: string;
  fullName: string;
  imgSrc: string;

  constructor(shortName: string, fullName: string, imgSrc: string) {
    this.shortName = shortName;
    this.fullName = fullName;
    this.imgSrc = imgSrc;
  }
}
